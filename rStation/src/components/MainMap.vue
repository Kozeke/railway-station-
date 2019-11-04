<template>
    <div>
        <div class="google-map" id="map"></div>
        <input type="button" class="btn btn-danger" @click="saveRoad()" value="Add Road">
    </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
    export default {
        name: 'google-map',
         props: ['markers'],
        data() {
            return {
                map: null
            }
        },
        computed: {
            mapMarkers: function () {
                return this.markers
            }
        },
        mounted: function () {
            let stationFrom = null, stationTo = null;
            if(localStorage.stationFrom){
                stationFrom = localStorage.stationFrom;
            }
            if(localStorage.stationTo){
                stationTo = localStorage.stationTo;
            }
            var markers = this.markers;
            GoogleMapsLoader.KEY = 'AIzaSyC89sEOJvI6sPySOghfkKsm7FsLqfZZL98';
            GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
            GoogleMapsLoader.load(function(google) {
                var options = {
                    zoom: 5,
                    center:{ lat: 45.5, lng: 67},
                    mapTypeId: 'roadmap', //terrain, hybrid, satellite
                    scrollwheel: false,
                    fullscreenControl: false,
                    clickableIcons: false,
                    gestureHandling: 'greedy',
                    keyboardShortcuts: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    styles: [
                        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
                        {elementType: 'labels.text.fill', stylers: [{color: '#523735', }]},
                        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
                        {
                            featureType: 'administrative',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#c9b2a6'}]
                        },
                        {
                            featureType: 'administrative.land_parcel',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#dcd2be'}]
                        },
                        {
                            featureType: 'administrative.country',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#00004d'}]
                        },
                        {
                            featureType: 'administrative.land_parcel',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#ae9e90'}]
                        },
                        {
                            featureType: 'landscape.natural',
                            elementType: 'geometry',
                            stylers: [{color: '#ff9933  '}]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'geometry',
                            stylers: [{color: '#dfd2ae'}]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#93817c'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry.fill',
                            stylers: [{color: '#a5b076'}]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#447530'}]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{color: '#f5f1e6'}]
                        },
                        {
                            featureType: 'road.arterial',
                            elementType: 'geometry',
                            stylers: [{color: '#fdfcf8'}]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{color: '#f8c967'}]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#e9bc62'}]
                        },
                        {
                            featureType: 'road.highway.controlled_access',
                            elementType: 'geometry',
                            stylers: [{color: '#e98d58'}]
                        },
                        {
                            featureType: 'road.highway.controlled_access',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#db8555'}]
                        },
                        {
                            featureType: 'road.local',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#806b63'}]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'geometry',
                            stylers: [{color: '#dfd2ae'}]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#8f7d77'}]
                        },
                        {
                            featureType: 'transit.line',
                            elementType: 'labels.text.stroke',
                            stylers: [{color: '#ebe3cd'}]
                        },
                        {
                            featureType: 'transit.station',
                            elementType: 'geometry',
                            stylers: [{color: '#dfd2ae'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry.fill',
                            stylers: [{color: '#b9d3c2'}]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#92998d'}]
                        }
                        ]
                }
                const map = new google.maps.Map(document.getElementById('map'), options);
                var colorArray = ['#e6194b', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
                var flightPlanCoordinates = [];
                if(localStorage.allRoutes){
                    flightPlanCoordinates =  JSON.parse(localStorage.getItem('allRoutes'))
                }
                let i = 0;
                flightPlanCoordinates.forEach((flightPlanCoordinate) =>{
                    let route = new Array();
                    let j = 0;
                    if(flightPlanCoordinate[0].station === stationFrom || flightPlanCoordinate[0].station === stationTo){
                        route.push(flightPlanCoordinate[0]);
                        j++;
                    }
                    for( let x = 1; x < flightPlanCoordinate.length; x++ ){
                        if(j===1){
                            route.push(flightPlanCoordinate[x]);
                        }
                        if(flightPlanCoordinate[x].station === stationFrom || flightPlanCoordinate[x].station === stationTo){
                            j++;
                        }
                        if(j === 2){
                            var flightPath = new google.maps.Polyline({
                                path: route,
                                geodesic: true,
                                strokeColor: colorArray[i],
                                strokeOpacity: 0.3,
                                strokeWeight: 4
                            });
                            flightPath.setMap(map);
                            x = flightPlanCoordinate.length;
                            continue;
                        }
                    }
                    i++;
                })
                markers.forEach((marker) => {
                    const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
                    marker.map = map,
                    marker.position = position,
                    new google.maps.Marker(marker)  
                })
            });
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .google-map {
        width: 100%;
        height: 100%;
        background: gray;
        border: 8px solid #fff;
        position: absolute;
        z-index: 1;
        top: 0;
    }
</style>