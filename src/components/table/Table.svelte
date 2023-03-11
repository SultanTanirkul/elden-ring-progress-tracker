<script lang="ts">
    import Row from "./Row.svelte";
    import type { TableData } from "./types";

    export let data: TableData;
    export let headers: string[];
</script>

<div>
    <table>
        <thead>
            <tr>
                {#each headers as header}
                    <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each data.rows as row}
                <Row row={row} columnConfig={data.columnConfig}/>
            {/each}
        </tbody>
    </table>
</div>