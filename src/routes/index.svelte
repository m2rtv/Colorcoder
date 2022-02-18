<script>
    import Button from './components/button.svelte'
    import About from './components/about.svelte'
    import Scoreboard from './components/scoreboard.svelte'
    import Won from './components/won.svelte'
    import Lost from './components/lost.svelte'
    import Alert from './components/alert.svelte'

    // Modals
    let aboutModal = false;
    let scoreModal = false;
    let wonModal = false;
    let lostModal = false;
    let alertVisible = false;
    const toggleAboutModal = () => {
        aboutModal = !aboutModal;
    }
    const toggleScoreModal = () => {
        scoreModal = !scoreModal;
    }
    const toggleWonModal = () => {
        wonModal = !wonModal;
    }
    const toggleLostModal = () => {
        lostModal = !lostModal;
    }

    // Shuffle all the values and return 4 unique cases
    function shuffleArray(poop) {
        poop.sort(() => Math.random() - 0.5);
    }
    // Final answer variable ⬇️
    let poop = [1, 2, 3, 4, 5, 6];
    shuffleArray(poop);
    poop.splice(0, 2);
    console.log('Answer is: ' + poop);

    // Setup
    let rows = 8;
    let cols = 4;

    let activeGroup = 0;

    // Guess slot styles
    let colArr = [
        'border border-dashed border-neutral-300 dark:border-neutral-600', 
        'bg-red-500', 
        'bg-yellow-500', 
        'bg-green-500', 
        'bg-sky-500', 
        'bg-purple-500', 
        'bg-slate-500'
    ];

    // Save all the board items
    function item(id, group, answer, color) {
        this.id = id;
        this.group = group;
        this.answer = answer;
        this.color = colArr[answer];
    }

    // Guess slots
    let guesses = []
    let myItem;
    let id = 0;
    for (let y=0; y<rows; y++) {
        guesses.push([]);
        for (let x=0; x<cols; x++) {
            myItem = new item(id, y, 0);
            guesses[y].push(myItem);
            id+=1;
        }
    }

    // Hint item styles
    let hintStyle = [
        'border border-neutral-300 dark:border-neutral-600', 
        'border border-neutral-300 dark:border-neutral-300', 
        'bg-neutral-300'
    ];

    // Save all the hint items
    function hintItem(hint, style) {
        this.hint = hint;
        this.style = hintStyle[hint];
    }

    // Hint slots
    let hints = []
    let hintItems;
    for (let y=0; y<rows; y++) {
        hints.push([]);
        for (let x=0; x<cols; x++) {
            hintItems = new hintItem(0);
            hints[y].push(hintItems);
        }
    }

    // Button
    function submit() {
        // First check if all the slots are filled
        if (guesses[activeGroup][0].answer !== 0 && guesses[activeGroup][1].answer !== 0 && guesses[activeGroup][2].answer !== 0 && guesses[activeGroup][3].answer !== 0) {
            let hintArray = [];
            // Check all the answers and give hints
            for (let i=0; i<cols; i++) {
                let currentAnswer = guesses[activeGroup][i].answer
                // Check if the given answer is the same, and on the same slot
                if (currentAnswer === poop[i]) {
                    hintArray.push(2)
                } 
                // Else if - correct color, but in the wrong position
                else if (currentAnswer === poop[0] || currentAnswer === poop[1] || currentAnswer === poop[2] || currentAnswer === poop[3]) {
                    hintArray.push(1)
                }
            }
            hintArray.sort();
            hintArray.reverse();
            for (let i=0; i<hintArray.length; i++) {
                hints[activeGroup][i].hint = hintArray[i];
                hints[activeGroup][i].style = hintStyle[hintArray[i]];
            }
            
            // Check if we have a winning combo and show modal if true
            if (hints[activeGroup][0].hint == 2 && hints[activeGroup][1].hint == 2 && hints[activeGroup][2].hint == 2 && hints[activeGroup][3].hint == 2) {
                wonModal = true;
                activeGroup = rows+1;
            } else if (activeGroup == rows-1) {
                lostModal = true;
                activeGroup+=1;
            } else {
                // Make the next line editable
                activeGroup+=1;
            }
            
        } else {
            console.log('PLEASE FILL OUT ALL THE SLOTS')
            alertVisible = true;
            setTimeout((hideAlert), 3000)
            function hideAlert() { alertVisible = false }
        }
    }

    // Check if clicked element belongs to an active group and update answer and color
    function toggleAnswer(item) {
        if (item.group === activeGroup) {
            if (item.answer === 6) {
                item.answer = 1;
                item.color = colArr[item.answer]
            } else {
                item.answer+=1;
                item.color = colArr[item.answer]
            }
        }
        // Update data
        guesses=guesses;
    }

    // Keyboard event for 'Enter' to Submit
    function onKeyDown(e) {
        if (e.keyCode === 13) {
            submit();
        }
    }

</script>

<About aboutModal={aboutModal} on:click={toggleAboutModal} />
<Scoreboard scoreModal={scoreModal} on:click={toggleScoreModal} />
<Won wonModal={wonModal} on:click={toggleWonModal} />
<Lost lostModal={lostModal} on:click={toggleLostModal} />
<Alert alertVisible={alertVisible} message="Please fill in all the items in the row"/>

<header>
    <div class="flex">
        <div class="h-2 flex-1 bg-red-500"></div>
        <div class="h-2 flex-1 bg-yellow-500"></div>
        <div class="h-2 flex-1 bg-green-500"></div>
        <div class="h-2 flex-1 bg-sky-500"></div>
        <div class="h-2 flex-1 bg-purple-500"></div>
        <div class="h-2 flex-1 bg-slate-500"></div>
    </div>
    <div class="flex justify-between items-center p-4 max-w-md mx-auto bg-neutral-800">
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

<div class="max-w-md mx-auto mt-[40vh] px-4 text-xs text-neutral-400 select-none">
    {#each guesses as group, i}
        <div class="grid grid-flow-col auto-cols-fr gap-1.5 mb-1.5">
            <div class="flex items-center">
                {#each hints[i] as hint, j}
                    <div class="w-3 h-3 rounded-full mr-1 {hint.style}"></div>
                {/each}
            </div>
            {#each group as item}
                {#if item.group === activeGroup}
                    <div id="aspect-ratio-11" class="border border-neutral-300 rounded-lg flex justify-center items-center dark:border-neutral-300 cursor-pointer" on:click={ () => toggleAnswer(item) }>
                        <div class="w-10 h-10 flex justify-center items-center {item.color} rounded-full text-white">
                            <!-- {item.answer} -->
                        </div>
                    </div>
                {:else}
                    <div id="aspect-ratio-11" class="border border-neutral-300 rounded-lg flex justify-center items-center dark:border-neutral-600" on:click={ () => toggleAnswer(item) }>
                        <button class="w-10 h-10 flex justify-center items-center {item.color} rounded-full text-white">
                            <!-- {item.answer} -->
                        </button>
                    </div>
                {/if}
            {/each}
        </div>
    {/each}
</div>
<div class="mb-28"></div>

<div class="w-screen fixed bottom-7 mx-auto">
    <Button on:click={submit}>Submit</Button>
</div>

<!-- Submit on enter -->
<svelte:window on:keydown={onKeyDown} />

<style>

    * {
        touch-action: manipulation;
    }

    #aspect-ratio-11 {
        aspect-ratio: 1 / 1;
    }
    @supports not (aspect-ratio: 1 / 1) {
        #aspect-ratio-11::before {
            float: left;
            padding-top: 100%;
            content: "";
        }

        #aspect-ratio-11::after {
            display: block;
            content: "";
            clear: both;
        }
    }
</style>