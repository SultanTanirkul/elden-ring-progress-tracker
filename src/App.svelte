<script lang="ts">
    import { onMount } from 'svelte';
    import Map from './components/map/Map.svelte';
    import type { ERBoss } from './components/map/types';
    import Table from './components/table/Table.svelte'
    import { ColumnType, type TableData } from './components/table/types';
    import { setMarkers } from './utils/map-utils';

    let bosses: ERBoss[] = [];
    let rowBosses: TableData = {
        rows: [],
        columnConfig: []
    };

    onMount(async () => {
        bosses = await fetch("./data/bosses.json").then(res => res.json());
        rowBosses = {
            columnConfig: [
                {
                    type: ColumnType.CHECKBOX,
                    callbacks: {
                        onChange: (event) => localStorage.setItem(event.uuid, event.currentTarget.checked)
                    }
                },
                {
                    type: ColumnType.TEXT
                },
                {
                    type: ColumnType.COORDINATES,
                    callbacks: {
                        onClick: (event) => window.erMap.setView(event.latLng, 10, {
                            animate: true
                        })
                    }
                },
                {
                    type: ColumnType.TEXT
                },
                {
                    type: ColumnType.UUID
                }
            ],
            rows: bosses.map(boss => [localStorage.getItem(boss.uuid), boss.name, boss.coords, boss.region, boss.uuid]),
        }

        setMarkers(bosses.map(boss => boss.coords), window.erMap);
    })
</script>
<Map />
<Table data={rowBosses} headers={["Found", "Name", "Location", "Region"]}/>
