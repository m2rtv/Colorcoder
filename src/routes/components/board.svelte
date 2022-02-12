<script>
    import CodeHole from './codeHole.svelte'
    import KeyHoles from './keyHoles.svelte'

    let boardSize = 4;
</script>

<!-- Board wrapper -->
<div class="max-w-md mx-auto mt-[33vh] px-4">
    <!-- Row -->
    <div class="grid grid-flow-col gap-1.5">
        <KeyHoles/>
        {#each {length: boardSize} as _, i}
            <CodeHole/>
        {/each}
    </div>
</div>