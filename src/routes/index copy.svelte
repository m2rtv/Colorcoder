<script>
    import Button from './components/button.svelte'
    import Board from './components/board.svelte'
    import About from './components/about.svelte'
    import Scoreboard from './components/scoreboard.svelte'
    //import {codeSlotData} from './stores/codeSlotData.js'

    // Modal functionality
    let aboutModal = false;
    let scoreModal = false;
    const toggleAboutModal = () => {
        aboutModal = !aboutModal;
    }
    const toggleScoreModal = () => {
        scoreModal = !scoreModal;
    }

    // Shuffle all the values and return 4 unique cases
    function shuffleArray(poop) {
        poop.sort(() => Math.random() - 0.5);
    }
    // Final answer variable ⬇️
    let poop = [1, 2, 3, 4, 5, 6];
    shuffleArray(poop);
    poop.splice(0, 2);
    console.log(poop);

    // Setup
    let rows = 8;
    let cols = 4;

    let colArr = [
        'border border-dashed border-neutral-300 dark:border-neutral-400', 
        'bg-red-500', 
        'bg-yellow-500', 
        'bg-green-500', 
        'bg-sky-500', 
        'bg-purple-500', 
        'bg-slate-500'
    ];

    // Save all the board items
    function item(id, group, col, row, answer, color) {
        this.id = id
        this.group = group;
        this.row = row;
        this.col = col;
        this.answer = answer;
        this.color = colArr[answer];
    }

    let guesses = []
    let myItem;
    let id = 0;
    for (let y=0; y<rows; y++) {
        for (let x=0; x<cols; x++) {
            myItem = new item(id, y, x, y, 0);
            guesses.push(myItem);
            id+=1;
        }
    }
    console.log(guesses)

    function submit() {
        if (activeGroupItems[0].answer && activeGroupItems[1].answer && activeGroupItems[2].answer && activeGroupItems[3].answer !== 0) {
            activeGroup+=1;
            let correctPlace = 0;
            // Check for right answers
            for(let i=0; i<=3; i++) {
                if (activeGroupItems[i].answer === poop[i]) {
                    correctPlace+=1;
                }
            }
            // Go on to the next one and give hints
            // Or display the winning modal
        // Check if active group has all the boxes ticked (>0)
        } else {
            console.log('FILL OUT ALL THE SHIT' + ' activeGroup: ' + activeGroup)
        }
    }

    let activeGroup = 0;
    
    $: activeGroupItems = guesses.filter(function(i) {
        return i.group === activeGroup;
    });

    // Check if clicked element is an active group and update answer and color
    function toggleAnswer(id, answer) {
        if (guesses[id].group === activeGroup) {
            if (guesses[id].answer === 6) {
                guesses[id].answer = 1;
                guesses[id].color = colArr[guesses[id].answer]
            } else {
                guesses[id].answer+=1;
                guesses[id].color = colArr[guesses[id].answer]
            }
        }
    }

    let hints = ['N', 'N', 'N', 'N'];

    
    
</script>

{#each guesses as guess (guess.id)}
    {#if guess.id === 0}
        <p>{hints[0]} {hints[1]} {hints[2]} {hints[3]}</p>
    {/if}
    <p class="h-8 flex justify-center items-center flex-grow {guess.color}" on:click={ () => toggleAnswer(guess.id, guess.answer) }>{guess.id} — {guess.answer}</p>
{/each}


<About aboutModal={aboutModal} on:click={toggleAboutModal}/>
<Scoreboard scoreModal={scoreModal} on:click={toggleScoreModal}/>

<header>
    <div class="flex">
        <div class="h-2 flex-1 bg-red-500"></div>
        <div class="h-2 flex-1 bg-yellow-500"></div>
        <div class="h-2 flex-1 bg-green-500"></div>
        <div class="h-2 flex-1 bg-sky-500"></div>
        <div class="h-2 flex-1 bg-purple-500"></div>
        <div class="h-2 flex-1 bg-slate-500"></div>
    </div>
    <div class="flex justify-between items-center p-4 max-w-md mx-auto">
        <h1 class="text-2xl font-medium tracking-tight">Mastermind</h1>
        <nav class="flex">
            <div class="ml-3 cursor-pointer" on:click={toggleAboutModal}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="ml-3 cursor-pointer" on:click={toggleScoreModal}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            </div>
            <div class="ml-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </nav>
    </div>
</header>

<!-- {#each $codeSlotData as codeSlot}
    <p class="text-white" 
    class:text-neutral-500={!codeSlot.activeRow}>
    {codeSlot.id}
    </p>
{/each} -->

<Board>

</Board>

<div class="w-screen fixed bottom-7 mx-auto">
    <Button on:click={submit}>Submit</Button>
</div>