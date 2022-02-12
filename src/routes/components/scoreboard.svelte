<script>
    export let scoreModal = true;

</script>

{#if scoreModal}
<div class="w-screen h-screen flex justify-center items-center bg-white dark:bg-neutral-900 bg-opacity-90 absolute z-10" on:click>
    <div class="max-w-md mx-16 p-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">Scoreboard</h1>
        <p class="text-neutral-600 dark:text-neutral-200">This is a scoreboard</p>
    </div>
</div>
{/if}