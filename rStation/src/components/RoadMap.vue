<template>
    <yandex-map 
        :coords="[47.7833302, 67.6999972]"
        zoom="5"
        style="width: 1000px; height: 500px; margin: auto;"
        :cluster-options="{
            1: {clusterDisableClickZoom: true}
        }"
        :behaviors="['ruler']"
        :controls="[
            'fullscreenControl',
            'geolocationControl',
            'routeEditor',
            'rulerControl',
            'searchControl',
            'trafficControl',
            'typeSelector',
            'zoomControl',
            'routePanelControl',
        ]"
        :placemarks="placemarks" 
        map-type="map"
        @map-was-initialized="initHandler"
        >
            <ymap-marker 
                marker-type="placemark"
                :coords="[51.169392, 71.449074]"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'tags'}"
                cluster-name="1"
            ></ymap-marker>
            <ymap-marker 
                marker-type="placemark"
                :coords="[43.238949, 76.889709]"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'tags'}"
                cluster-name="1"
            ></ymap-marker>
            <ymap-marker 
                marker-type="placemark"
                :coords="[42.340782, 69.596329]"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'tags'}"
                cluster-name="1"
            ></ymap-marker>
            <ymap-marker 
                marker-type="polyline"
                :coords="[ [51.169392, 71.449074],  [49.8333282, 73.165802] ] "
                circle-radius="500"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.8}"
                :marker-stroke="{color: '#ff0000', width: 2}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker>
            <ymap-marker 
                marker-type="polyline"
                :coords="[ [49.8333282, 73.165802],  [46.8481, 74.9950] ] "
                circle-radius="500"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.8}"
                :marker-stroke="{color: '#ff0000', width: 2}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker>
            <ymap-marker 
                marker-type="polyline"
                :coords="[ [46.8481, 74.9950],  [46.4481, 73.9950] ] "
                circle-radius="500"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.8}"
                :marker-stroke="{color: '#ff0000', width: 2}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker>
             <ymap-marker 
                marker-type="polyline"
                :coords="[ [46.4481, 73.9950],  [45.6481, 73.0950] ] "
                circle-radius="500"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.8}"
                :marker-stroke="{color: '#ff0000', width: 2}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker>
            <ymap-marker 
                marker-type="polyline"
                :coords="[ [45.6481, 73.0950],  [43.238949, 76.889709] ] "
                circle-radius="500"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.8}"
                :marker-stroke="{color: '#ff0000', width: 2}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker>
            <!-- <ymap-marker 
                marker-type="circle"
                :coords="[43.238949, 76.889709]"
                circle-radius="2000"
                hint-content="Hint content 1"
                :marker-fill="{color: '#000000', opacity: 0.4}"
                :marker-stroke="{color: '#ff0000', width: 20}"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            ></ymap-marker> -->
    </yandex-map>
    
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
    components: { yandexMap, ymapMarker },
    data() {
        return {
            placemarks: [
                        {
                            coords: [54.8, 39.8],
                            properties: {}, // define properties here
                            options: {}, // define options here
                            clusterName: "1",
                            callbacks: { click: function() {} }
                        }
            ]
        }
    }
}
</script>

