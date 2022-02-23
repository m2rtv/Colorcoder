<script>
    import { fade, fly } from 'svelte/transition';
    export let wonModal = true;
</script>

{#if wonModal}
<div class="w-screen h-screen flex justify-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 fixed z-10" on:click|self transition:fade="{{duration:200}}">
    <div class="max-w-md h-max mx-4 mt-[74px] p-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-20" in:fly="{{y: 64, delay: 200, duration:300}}">
        <h1 class="text-2xl text-center font-medium mb-4">Congrats! 🎉</h1>
        <p class="text-center text-neutral-600 dark:text-neutral-200">Well done! You guessed the code.</p>
        <p class="text-center text-neutral-600 dark:text-neutral-200">Refresh the page to try again</p>
    </div>
</div>
{/if}