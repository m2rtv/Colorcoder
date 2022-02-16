<script>
    export let wonModal = true;
</script>

{#if wonModal}
<div class="w-screen h-screen flex justify-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 fixed z-10" on:click>
    <div class="max-w-md h-max mx-4 mt-[74px] p-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">Congrats!</h1>
        <p class="text-neutral-600 dark:text-neutral-200">U da man. All the colors be belonging to you.</p>
        <div style="width:100%;height:0;padding-bottom:66%;position:relative;"><iframe src="https://giphy.com/embed/s2qXK8wAvkHTO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>
    </div>
</div>
{/if}