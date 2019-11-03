<template>
    <div class="container bootstrap snippet">
        <div class="row menu-items">
            <ProfileMenu></ProfileMenu> 
            <div class="menu-data row col-sm-9">
                <div class="google-map" id="map"></div>
                <input type="button" class="btn btn-danger" @click="saveRoad()" value="Add Road">
            </div>
        </div>
    </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
import ProfileMenu from '../components/ProfileMenu.vue'
    export default {
        components:{
            ProfileMenu
        },
        name: 'google-map',
        props: ['name'],
        data() {
            return {
                map: null,
                clickedRoutes: null,
                markers: [
                    {
                        station: 'Astana',
                        position: {
                            latitude: 51.169392,
                            longitude: 71.449074
                        }
                    },
                    {
                        station: 'Karaganda',
                        position: {
                            latitude: 49.8333282,
                            longitude: 73.165802
                        }
                    },
                    {
                        station: 'Jezkazgan',
                        position: {
                            latitude: 47.78333,
                            longitude: 67.70000
                        }
                    },
                    {
                        station: 'Balkash',
                        position: {
                            latitude: 46.8481,
                            longitude: 74.9950
                        }
                    },
                    {
                        station: 'Shu',
                        position: {
                            latitude: 45.890325,
                            longitude: 73.070651
                        }
                    },
                    {
                        station: 'Almaty',
                        position: {
                            latitude: 43.238949,
                            longitude: 76.889709
                        }
                    },
                    {
                        station: 'Taraz',
                        position: {
                            latitude: 42.896088,
                            longitude: 71.398430
                        }
                    },
                    {
                        station: 'Shymkent',
                        position: {
                            latitude: 42.340782,
                            longitude: 69.596329
                        }
                    },
                    {
                        station: 'Kyzylorda',
                        position: {
                            latitude: 44.8528,
                            longitude: 65.5092
                        }
                    }
                ]
            }
        },
        computed: {
            mapMarkers: function () {
                return this.markers
            }
        },
        mounted: function () {
            var markers = this.markers;
            let clickedCoords = new Array();
            GoogleMapsLoader.KEY = 'AIzaSyC89sEOJvI6sPySOghfkKsm7FsLqfZZL98';   // Google map api KEY ( Change to your's )
            GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];                // Library for more map options
            GoogleMapsLoader.load(function(google) {
                var options = {
                    zoom: 5,
                    center:{ lat: 48.5, lng: 66.9},     // Center of Map
                    mapTypeId: 'roadmap',               // terrain, hybrid, satellite
                    scrollwheel: false,                 // via mouse scroll
                    fullscreenControl: false,           // full page by Click
                    gestureHandling: 'greedy',          // Instruction
                    keyboardShortcuts: false,           // Add keyboard control options
                    mapTypeControl: false,              // Change type of Map
                    streetViewControl: false,           // 3D View ( Street Cross )

                    /*      Custom Map styling      */
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
                
                /*      If you have SearchBox / Autocomplete Options (check key)     */
                // var autocomplete = new google.maps.places.SearchBox(document.getElementById('searchTextField'), {
                //     types: ['geocode']
                // });
                // autocomplete.addListener('place_changed', () => {
                //     const place = this.autocomplete.getPlace()
                //     console.log(place);
                // });
                var colorArray = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
                var flightPlanCoordinates = [];
                if(localStorage.allRoutes){
                    flightPlanCoordinates =  JSON.parse(localStorage.getItem('allRoutes'))
                }
                let i = 0;
                flightPlanCoordinates.forEach((flightPlanCoordinate) =>{
                    var flightPath = new google.maps.Polyline({
                        path: flightPlanCoordinate,
                        geodesic: true,
                        strokeColor: colorArray[i],
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    flightPath.setMap(map);
                    var poly = new google.maps.Polyline({
                        strokeColor: '#000000',
                        strokeOpacity: 1.0,
                        strokeWeight: 3
                    });
                    poly.setMap(map);
                    i++;
                })
                // var flightPath = new google.maps.Polyline({
                //     path: flightPlanCoordinates,
                //     geodesic: true,
                //     strokeColor: '#FF0000',
                //     strokeOpacity: 1.0,
                //     strokeWeight: 2
                // });
                // flightPath.setMap(map);
                // var poly = new google.maps.Polyline({
                //     strokeColor: '#000000',
                //     strokeOpacity: 1.0,
                //     strokeWeight: 3
                // });
                // poly.setMap(map);
                /*      Add Marker by Click     */
                // map.addListener('click', function (event){
                //     var path = poly.getPath();
                //     // Because path is an MVCArray, we can simply append a new coordinate
                //     // and it will automatically appear.
                //     path.push(event.latLng);

                //     // Add a new marker at the new plotted point on the polyline.
                //     var marker = new google.maps.Marker({
                //         position: event.latLng,
                //         title: '#' + path.getLength(),
                //         map: map
                //     });
                    
                // });
                
                /*      Add path between consequetive markers     */
                // google.maps.event.addListener(map, "click", function (event) {
                //     var latitude = event.latLng.lat();
                //     var longitude = event.latLng.lng();
                //     clickedCoords.push({
                //         lat: latitude,
                //         lng: longitude
                //     })
                //     // console.log( latitude + ', ' + longitude );
                //     var radius = new google.maps.Circle({map: map,
                //         radius: 100,
                //         center: event.latLng,
                //         fillColor: '#777',
                //         fillOpacity: 0.1,
                //         strokeColor: '#AA0000',
                //         strokeOpacity: 0.8,
                //         strokeWeight: 4,
                //         draggable: true,    // Dragable
                //         editable: true      // Resizable
                //     });

                // //     Change Center of map
                // //     map.panTo(new google.maps.LatLng(latitude,longitude));

                // });
                
                /*   Click on marker   */
                markers.forEach((marker) => {
                    google.maps.event.addDomListener(marker, 'click', function() {
                        clickedCoords.push({
                            lat: marker.position.lat(),
                            lng: marker.position.lng(),
                            station: marker.station
                            
                        });
                        // localStorage.setItem('routes', JSON.stringify(routes));

                        var flightPath = new google.maps.Polyline({
                            path: clickedCoords,
                            geodesic: true,
                            strokeColor: '#FF0000',
                            strokeOpacity: 1.0,
                            strokeWeight: 4
                        });
                        flightPath.setMap(map);
                        var poly = new google.maps.Polyline({
                            strokeColor: '#000000',
                            strokeOpacity: 1.0,
                            strokeWeight: 3
                        });
                        poly.setMap(map);
                        });
                    const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
                    marker.map = map,
                    marker.position = position,
                    new google.maps.Marker(marker)  
                })
            });
            this.clickedRoutes = clickedCoords;
        },
        methods: {
            saveRoad(){
                var allRoutes = new Array();
                var routes = new Array();
                this.clickedRoutes.forEach((route) => {
                    routes.push({
                        lat: route.lat,
                        lng: route.lng,
                        station: route.station
                    });
                })
                if(localStorage.allRoutes){
                    allRoutes =  JSON.parse(localStorage.getItem('allRoutes'))
                } 
                allRoutes.push(routes);
                localStorage.setItem('allRoutes', JSON.stringify(allRoutes));
                location.reload();
            }
            
        }
    }
</script>

<style scoped lang="scss">
    .google-map {
        width: 100%;
        height: 520px;
        background: rgba(0,0,0,0.1);
        border: 4px solid rgba(0,0,0,0.1);
        border-radius: 6px;
        margin: 0;
    }
    .container{
        margin: auto;
        margin-top: 138px;
        max-width: 88% !important;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 16px;
        border-radius: 8px;
        .menu-data{
            padding: 0;
        }
    }
</style>