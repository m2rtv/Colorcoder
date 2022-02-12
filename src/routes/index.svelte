<script>
    import Button from './components/button.svelte'
    import Board from './components/board.svelte'
    import About from './components/about.svelte'
    import Scoreboard from './components/scoreboard.svelte'

    let aboutModal = false;
    let scoreModal = false;
    const toggleAboutModal = () => {
        aboutModal = !aboutModal;
    }
    const toggleScoreModal = () => {
        scoreModal = !scoreModal;
    }
</script>

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

<Board>

</Board>

<Button>Submit</Button>