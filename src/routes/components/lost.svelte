<script>
    import { fade, fly } from 'svelte/transition';
    export let lostModal = true;
</script>

{#if lostModal}
<div class="w-screen h-screen flex justify-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 fixed z-10" on:click transition:fade="{{duration:200}}">
    <div class="max-w-md h-max mx-4 mt-[74px] p-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-20" in:fly="{{y: 64, delay: 200, duration:300}}">
        <h1 class="text-2xl text-center font-medium mb-4">Dont worry! <br>Happens to the best of us</h1>
    </div>
</div>
{/if}