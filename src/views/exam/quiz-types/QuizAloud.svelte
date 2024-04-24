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
        
        setTimeout(() => {
            over(isCorrect);
        }, 1000);
        
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
    <h3>听读音选择日文</h3>
    <button class="play-vocal" on:click={playVocal}>播放语音</button>
    <div class="ui-selects">
        {#each quiz.chioces as chioce, index}
        <button class="item" 
            on:click={()=>selectIndex(index)} 
            data-index={index}
            data-selected={currentSelectIndex === index}>
            {chioce}
        </button>
        {/each}
    </div>
    <button on:click={check} disabled={currentSelectIndex === null}>检查</button>
    <button on:click={over}>over</button>
</div>
{/if}

