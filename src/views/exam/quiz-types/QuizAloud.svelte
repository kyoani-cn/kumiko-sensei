<script>
    import { createEventDispatcher } from "svelte";
    export let quiz = null;

    import { playAudioByVid } from '../../../functions/audio.mjs'
    import { showToast } from '../../../functions/toast.mjs'
    const dispatch = createEventDispatcher();
    
    const over = (v) => {
        dispatch('over',v);
    }

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
        
        over(isCorrect);
        
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
    <div class="layout quiz-middle-box">
        <div class="quiz-middle-content-box">
            <h1>听读音选日文</h1>
            <div class="quiz-two-box">
                <button class="ui-play-vocal" on:click={playVocal}>播放语音</button>
                <div class="ui-selects">
                    {#each quiz.chioces as chioce, index}
                    <div class="option-item" 
                        on:click={()=>selectIndex(index)} 
                        data-index={index}
                        data-selected={currentSelectIndex === index}>
                        {chioce}
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="layout quiz-foot-box">
        <button class="ui-btn min grey" on:click={()=>dispatch('skip')}>跳过</button>
        <button class="ui-btn min green" on:click={check} disabled={currentSelectIndex === null}>检查</button>
    </div>
    <!-- <button class="ui-btn min green" on:click={over}>over</button> -->
</div>
{/if}

