<script>
    import { createEventDispatcher } from "svelte";

    export let quiz = null;

    const dispatch = createEventDispatcher();
    
    const over = (v) => {
        dispatch('over',v);
    }
</script>

{#if quiz}
<div class="quiz-box">
    <h3>匹配中文和读音</h3>
    <button on:click={over}>over</button>
</div>
{/if}