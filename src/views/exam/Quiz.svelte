
<script>
    import QuizAloud from "./quiz-types/QuizAloud.svelte";
    import QuizMatch from "./quiz-types/QuizMatch.svelte";
    import QuizMoji from "./quiz-types/QuizMoji.svelte";
    import QuizTranslate from "./quiz-types/QuizTranslate.svelte";

    export let quiz = null;
    $: quizType = quiz ? quiz.type : null;
    
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    
    const over = (v) => {
        dispatch('over',v);
    }

    const skip = ()=>{
        dispatch('skip');
    }
</script>

{#if quiz}
    {#if quizType === "aloud"}
        <QuizAloud {quiz} on:over={over} on:skip={skip} />
    {:else if quizType === "match"}
        <QuizMatch {quiz} on:over={over} on:skip={skip} />
    {:else if quizType === "moji"}
        <QuizMoji {quiz} on:over={over} on:skip={skip} />
    {:else if quizType === "translate"}
        <QuizTranslate {quiz} on:over={over} on:skip={skip} />
    {/if}
{/if}