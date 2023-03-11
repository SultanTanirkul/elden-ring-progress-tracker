<script lang="ts">
  import type { LatLngExpression } from "leaflet";
  import { ColumnType, type ColumnConfig, type MouseEventWithLatLng } from "./types";

    export let row: any[];
    export let columnConfig: ColumnConfig[];

    const handleCoordinatesClick = (event: MouseEventWithLatLng, config: ColumnConfig, latLng: LatLngExpression) => {
        event.latLng = latLng;
        config.callbacks.onClick(event);
    }
    const handleCheckboxChange = (event: Event & {
        currentTarget: EventTarget & HTMLInputElement;
    }, config: ColumnConfig, uuid: string) => {
        event.uuid = uuid;
        config.callbacks.onChange(event);

    }
</script>

<tr>
    {#each columnConfig as config, i}
        {#if config.type == ColumnType.TEXT}
            <td>{row[i]}</td>
        {:else if config.type == ColumnType.CHECKBOX}
            <td><input type=checkbox checked={row[i] === "true"} on:change={(e) => handleCheckboxChange(e, config, row[row.length - 1])}></td>
        {:else if config.type == ColumnType.COORDINATES}
            <td><button on:click={(event) => handleCoordinatesClick(event, config, row[i])}>Show on Map</button></td>
        {/if}
    {/each}
</tr>