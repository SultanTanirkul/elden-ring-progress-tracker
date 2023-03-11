import type { LatLngExpression, Map } from "leaflet";
import L from 'leaflet'

export const setMarkers = (locations: LatLngExpression[], map: Map) => {
    for (const location of locations) {
        L.marker(location).addTo(map);
    }
}