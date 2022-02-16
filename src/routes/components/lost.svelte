<script>
    export let lostModal = true;
</script>

{#if lostModal}
<div class="w-screen h-screen flex justify-center bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 fixed z-10" on:click>
    <div class="max-w-md h-max mx-4 mt-[74px] p-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">Dont worry! <br>Happens to the best of us</h1>
        <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/Xx38XfhopDPgY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed"></iframe></div>
    </div>
</div>
{/if}