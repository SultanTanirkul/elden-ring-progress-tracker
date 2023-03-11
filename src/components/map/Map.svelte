<script lang="ts">
    import L, { type LatLngExpression } from 'leaflet';
    import RasterCoords from 'leaflet-rastercoords';
    import {onMount} from 'svelte';

    const MAP_RESOLUTION = [10801, 10225]
    const CAELID_COORDS: LatLngExpression = [-114.125, 102.375]
    let erMap: L.Map = null;
    onMount(async () => {
        erMap = L.map('map', {
            crs: L.CRS.Simple
        });
        const rc = new RasterCoords(erMap, MAP_RESOLUTION)
        
        erMap.setMaxZoom(rc.zoomLevel());
        erMap.setMinZoom(3);
        erMap.setView(CAELID_COORDS, 3);
        erMap.addEventListener("click", (e) => console.log(e.latlng))

        L.tileLayer('./tiles/{z}/{x}/{y}.png', {
            noWrap: true,
            bounds: rc.getMaxBounds(),
            maxNativeZoom: rc.zoomLevel()
        }).addTo(erMap)

        window.erMap = erMap;
    })

</script>
<style>
    #map {
        height: 400px;
        width: 400px;
    }
</style>
<div id='map' />