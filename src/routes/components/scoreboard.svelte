<script>
    import { fade } from 'svelte/transition';
    export let scoreModal = true;
</script>

{#if scoreModal}
<div class="w-screen h-screen flex justify-center items-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 absolute z-10" on:click transition:fade="{{duration:200}}">
    <div class="max-w-md mx-16 p-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">Scoreboard</h1>
        <div class="text-neutral-600 dark:text-neutral-200">
            <p class="">Your scores go here</p>
            <p class="">1 row: 0 results</p>
            <p class="">2 rows: 1 results</p>
            <p class="">3 rows: 4 results</p>
            <p class="">4 rows: 26 results</p>
            <p class="">5 rows: 48 results</p>
            <p class="">6 rows: 31 results</p>
            <p class="">7 rows: 6 results</p>
            <p class="">8 rows: 2 results</p>
        </div>
    </div>
</div>
{/if}