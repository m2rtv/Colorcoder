<script>
    import { fade } from 'svelte/transition';
    export let aboutModal = true;
</script>

{#if aboutModal}
<div class="w-screen h-screen flex justify-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 fixed z-10" on:click|self transition:fade="{{duration:200}}">
    <div class="max-w-md h-max mx-4 mt-[74px] p-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">How to play</h1>
        <p class="text-neutral-600 dark:text-neutral-200">
            Colorcoder is a simple code breaking game, where you have to guess the color pattern in six turns.
        </p>
        <p class="mb-4">Each guess is made by placing a row of colors on the decoding board. You can cycle through 6 different colors by clicking on the active row. Hit the "Enter" button to submit.</p>
        <p>After each guess, you'll get hints on the left:</p>
        <div class="mt-2 mb-4">
            <div class="flex items-center h-8">
                <div class="w-3 h-3 mr-2 rounded-full border border-neutral-500 dark:border-neutral-300 bg-neutral-500 dark:bg-neutral-300"></div>
                <p class="inline-block">Right color, right position</p>
            </div>
            <div class="flex items-center h-8">
                <div class="w-3 h-3 mr-2 rounded-full border border-neutral-500 dark:border-neutral-300"></div>
                <p class="inline-block">Right color, wrong position</p>
            </div>
            <div class="flex items-center h-8">
                <div class="w-3 h-3 mr-2 rounded-full border border-neutral-300 dark:border-neutral-600"></div>
                <p class="inline-block">Wrong color</p>
            </div>
        </div>
        <p class="mb-4">One color may be used multiple times in the answer.</p>
        <p>Refresh the page to try again.</p>
    </div>
</div>
{/if}