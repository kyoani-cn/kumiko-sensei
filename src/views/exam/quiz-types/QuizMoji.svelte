<script>
    import { createEventDispatcher } from "svelte";
    import { showToast } from "../../../functions/toast.mjs";
    import { playAudioByVid } from "../../../functions/audio.mjs";

    export let quiz = null;

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

    const select = (vocal,index) => {
        playAudioByVid(vocal.vid)
        currentSelectIndex = index;
    }
    
</script>
{#if quiz}
<div class="quiz-box">
    <h3>看中文选读音</h3>
    <h3>{quiz.cn}</h3>
    <div class="ui-selects">
        {#each quiz.vocals as vocal, index}
        <button class="item" 
            on:click={()=>select(vocal,index)} 
            data-index={index}
            data-selected={currentSelectIndex === index}>
            {vocal.jp}
        </button>
        {/each}
    </div>
    <button on:click={check} disabled={currentSelectIndex === null}>检查</button>
    <button on:click={over}>over</button>
</div>
{/if}