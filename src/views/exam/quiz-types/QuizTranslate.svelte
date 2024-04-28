<script>
    import { createEventDispatcher } from "svelte";
    import { showToast } from "../../../functions/toast.mjs";
    import { playAudioByVid } from "../../../functions/audio.mjs";
    import QuizFoot from "./components/QuizFoot.svelte";

    export let quiz = null;

    export let onOver;
    export let onSkip;

    
    const check = () => {
        if(currentSelectIndex === null) {
            alert('请选择一个答案');
            return;
        }
        const isCorrect = quiz.answer === currentSelectIndex;
    
        showToast(
            isCorrect ? '回答正确' : '回答错误', 
            isCorrect ? 'success' : 'error'
        );
        
        onOver(isCorrect);
        
    }

    let currentSelectIndex = null;

    const selectIndex = (index) => {
        currentSelectIndex = index;
    }

    const playVocal = () => {
        console.log('播放语音');
        playAudioByVid(quiz.vid)
    }
</script>

{#if quiz}
<div class="quiz-box">
    <div class="layout ui-middle-box">
        <div class="quiz-middle-content-box">
            <h1>听读音选翻译</h1>
            <div class="quiz-two-box">
                <button class="ui-play-vocal" on:click={playVocal} data-key="Space">播放语音</button>
                <div class="ui-selects">
                    {#each quiz.cns as cn, index}
                    <div class="option-item" 
                        on:click={()=>selectIndex(index)} 
                        data-key={index+1}
                        data-selected={currentSelectIndex === index}>
                        {cn}
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <QuizFoot>
        <button class="ui-btn min grey" on:click={onSkip}>跳过</button>
        <button class="ui-btn min green" on:click={check} disabled={currentSelectIndex === null} data-key="Enter">检查</button>
        <!-- <button class="ui-btn min green" on:click={over}>over</button> -->
    </QuizFoot>
</div>
{/if}
