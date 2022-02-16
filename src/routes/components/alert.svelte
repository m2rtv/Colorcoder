<script>
    import { fade, fly } from 'svelte/transition';
	export let message;
    export let alertVisible = true;
</script>

{#if alertVisible}
    <div class="w-full flex justify-center items-center fixed top-6">
        <div class="mx-4 px-3 py-1.5 rounded bg-red-700 text-white text-sm text-center" 
            in:fly="{{ y: -12, duration: 400 }}"
            out:fly="{{ y: 12, duration: 400 }}">
            <p>{message}</p>
        </div>
    </div>
{/if}