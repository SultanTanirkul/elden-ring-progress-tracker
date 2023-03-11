import type { LatLngExpression } from "leaflet"

export type TableData = {
    columnConfig: ColumnConfig[]
    rows: any[]
}

export type ColumnConfig = {
    type: ColumnType
    callbacks?: ColumnCallback
}

export enum ColumnType {
    CHECKBOX,
    TEXT,
    COORDINATES,
    UUID
}

export type ColumnCallback = {
    onClick?: (event: MouseEventWithLatLng) => void
    onChange?: (event: Event & {
        currentTarget: EventTarget & HTMLInputElement;
    }) => void
}

export interface MouseEventWithLatLng extends MouseEvent {
    latLng?: LatLngExpression
}