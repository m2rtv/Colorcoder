<script>
    import CodeSlot from './codeSlot.svelte'
    import HintSlots from './hintSlots.svelte'

    let boardSize = 4;
    let guesses = 8;
</script>

<div class="max-w-md mx-auto mt-[40vh] px-4">
    {#each {length: guesses} as _, i}
        <!-- Row -->
        <div class="grid grid-flow-col auto-cols-fr gap-1.5 mb-1.5">
            <HintSlots/>
            {#each {length: boardSize} as _, i}
                <CodeSlot/>
            {/each}
        </div>
    {/each}
</div>