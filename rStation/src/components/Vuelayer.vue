<template>
    <div>
        <div class="google-map" id="map"></div>
    </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
    export default {
        name: 'google-map',
        props: ['name'],
        data() {
            return {
                map: null,
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
            GoogleMapsLoader.KEY = 'AIzaSyC89sEOJvI6sPySOghfkKsm7FsLqfZZL98';
            GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
            GoogleMapsLoader.load(function(google) {
                var options = {
                    zoom: 5,
                    center:{ lat: 48.5, lng: 67},
                    mapTypeId: 'roadmap', //terrain, hybrid, satellite
                    scrollwheel: true,
                    fullscreenControl: true,
                    clickableIcons: true,
                    keyboardShortcuts: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    styles: [
                        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
                        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
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
                            featureType: 'administrative.country.geometry',
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
                
                // var autocomplete = new google.maps.places.SearchBox(document.getElementById('searchTextField'), {
                //     types: ['geocode']
                // });
                // autocomplete.addListener('place_changed', () => {
                //     const place = this.autocomplete.getPlace()
                //     console.log(place);
                // });



                var flightPlanCoordinates = [
                    {lat: 51.169392, lng: 71.449074},
                    {lat: 49.8333282, lng: 73.165802},
                    {lat: 46.8481, lng: 74.9950},
                    {lat: 45.890325, lng: 73.070651},
                    {lat: 43.238949, lng: 76.889709}
                ];
                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#FF0000',
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

                // Add a listener for the click event
                map.addListener('click', function (event){
                    var path = poly.getPath();

                    // Because path is an MVCArray, we can simply append a new coordinate
                    // and it will automatically appear.
                    path.push(event.latLng);

                    // Add a new marker at the new plotted point on the polyline.
                    var marker = new google.maps.Marker({
                        position: event.latLng,
                        title: '#' + path.getLength(),
                        map: map
                    });
                });
                
                //**************************************************** */
                
                google.maps.event.addListener(map, "click", function (event) {
                    var latitude = event.latLng.lat();
                    var longitude = event.latLng.lng();
                    console.log( latitude + ', ' + longitude );

                    var radius = new google.maps.Circle({map: map,
                        radius: 100,
                        center: event.latLng,
                        fillColor: '#777',
                        fillOpacity: 0.1,
                        strokeColor: '#AA0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 4,
                        draggable: true,    // Dragable
                        editable: true      // Resizable
                    });

                    // Center of map
                    //  map.panTo(new google.maps.LatLng(latitude,longitude));

                });
                markers.forEach((marker) => {
                    google.maps.event.addDomListener(marker, 'click', function() {
                        window.location.href = 'http://www.google.co.uk/';
                    });
                    const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
                    marker.map = map,
                    marker.position = position,
                    marker.label = {
                        text: marker.station,
                        fontSize: "18pt",
                        fontWeight: "bold",
                        width: "150px",
                        color: "#4d2600"
                    }
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
        width: 960px;
        height: 540px;
        margin: 20px auto;
        background: gray;
        border: 8px solid #fff;
    }
</style>