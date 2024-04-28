<script>
    import { playAudioByVid } from "../../../functions/audio.mjs";
    import QuizFootSkipAndCheck from "./components/QuizFootSkipAndCheck.svelte";
    import QuizMiddle from "./components/QuizMiddle.svelte";
    import { showQuizDualisticToast } from './functions/show-quiz-toast.mjs';


    export let quiz = null;
    export let onOver;
    export let onSkip;


    
    const onCheck = () => {
        if(currentSelectIndex === null) {
            alert('请选择一个答案');
            return;
        }
        const isCorrect = quiz.answer === currentSelectIndex;
    
        showQuizDualisticToast(isCorrect);
        
        onOver(isCorrect);
        
    }

    let currentSelectIndex = null;

    const select = (vocal,index) => {
        playAudioByVid(vocal.vid)
        currentSelectIndex = index;
    }
    
</script>
{#if quiz}
<div class="quiz-box">
    <QuizMiddle>
        <h1>选 “{quiz.cn}” 对应的读音</h1>
        <div class="ui-selects">
            {#each quiz.vocals as vocal, index}
            <div class="option-item" 
                on:click={()=>select(vocal,index)} 
                data-key={index+1}
                data-selected={currentSelectIndex === index}>
                {vocal.jp}
            </div>
            {/each}
        </div>
    </QuizMiddle>
    <QuizFootSkipAndCheck onSkip={onSkip} onCheck={onCheck} disabledCheck={currentSelectIndex === null} />
</div>
{/if}