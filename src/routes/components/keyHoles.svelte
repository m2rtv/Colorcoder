<script>
</script>

<div id="aspect-ratio-11" class="flex justify-center items-center">
    <div class="w-10 h-10 border border-neutral-300 dark:border-neutral-500 border-dashed rounded-full">
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