<script>
    export let aboutModal = true;

</script>

{#if aboutModal}
<div class="w-screen h-screen flex justify-center items-center bg-white dark:bg-neutral-900 bg-opacity-90 absolute z-10" on:click>
    <div class="max-w-md mx-16 p-8 bg-neutral-100 dark:bg-neutral-700 rounded-xl z-20">
        <h1 class="text-2xl text-center font-medium mb-4">Mastermind is a simple code breaking game</h1>
        <p class="text-neutral-600 dark:text-neutral-200">The codebreaker tries to guess the pattern, in both order and color, within eight to twelve turns. Each guess is made by placing a row of code pegs on the decoding board. Once placed, the codemaker provides feedback by placing from zero to four key pegs in the small holes of the row with the guess. A colored or black key peg is placed for each code peg from the guess which is correct in both color and position. A white key peg indicates the existence of a correct color code peg placed in the wrong position.</p>
    </div>
</div>
{/if}