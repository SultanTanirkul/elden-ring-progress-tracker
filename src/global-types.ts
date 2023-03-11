import type { Map } from "leaflet";

declare global {
    interface Window {
        erMap: Map
    }
}