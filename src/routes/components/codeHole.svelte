<script>
    let colArr = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-sky-500', 'bg-purple-500', 'bg-slate-500']

    let count = 0;
    let selColor = colArr[count];
    function handleClick() {
        if (count === 5) {
            count = 0;
        } else {
            count+=1;
        }
        selColor = colArr[count];
    }
</script>

<div class="border border-neutral-300 rounded-lg flex justify-center items-center dark:border-neutral-500 cursor-pointer" on:click={handleClick}>
    <div class="w-10 h-10 flex justify-center items-center {selColor} rounded-full text-white">
        <!-- {count+1} -->
    </div>
</div>