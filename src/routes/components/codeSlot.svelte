<script>
    let colArr = [
        'border border-dashed border-neutral-300 dark:border-neutral-400', 
        'bg-red-500', 
        'bg-yellow-500', 
        'bg-green-500', 
        'bg-sky-500', 
        'bg-purple-500', 
        'bg-slate-500'
    ];

    let count = 0;
    let selColor = colArr[count];
    function handleClick() {
        if (count === 6) {
            count = 1;
        } else {
            count+=1;
        }
        selColor = colArr[count];
    }
</script>


<div  id="aspect-ratio-11" class="border border-neutral-300 rounded-lg flex justify-center items-center dark:border-neutral-500 cursor-pointer" on:click={handleClick}>
    <div class="w-10 h-10 flex justify-center items-center {selColor} rounded-full text-white">
        <!-- {count+1} -->
    </div>
</div>


<style>
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