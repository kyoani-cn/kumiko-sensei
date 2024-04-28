
<script>
    import QuizAloud from "./quiz-types/QuizAloud.svelte";
    import QuizMatch from "./quiz-types/QuizMatch.svelte";
    import QuizMoji from "./quiz-types/QuizMoji.svelte";
    import QuizTranslate from "./quiz-types/QuizTranslate.svelte";

    export let quiz = null;
    $: quizType = quiz ? quiz.type : null;
    

    export let onOver;
    export let onSkip;

</script>

{#if quiz}
    {#if quizType === "aloud"}
        <QuizAloud {quiz} onOver={onOver} onSkip={onSkip} />
    {:else if quizType === "match"}
        <QuizMatch {quiz} onOver={onOver} onSkip={onSkip} />
    {:else if quizType === "moji"}
        <QuizMoji {quiz} onOver={onOver} onSkip={onSkip} />
    {:else if quizType === "translate"}
        <QuizTranslate {quiz} onOver={onOver} onSkip={onSkip} />
    {/if}
{/if}