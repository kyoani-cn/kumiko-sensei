<script>
    import QuizFoot from "./QuizFoot.svelte";


    export let onSkip;
    export let onCheck;
    export let disabledCheck = true;

</script>
<QuizFoot>
    <button class="ui-btn min grey" on:click={onSkip}>跳过</button>
    <button class="ui-btn min green" on:click={onCheck} disabled={disabledCheck} data-key="Enter">检查</button>
</QuizFoot>