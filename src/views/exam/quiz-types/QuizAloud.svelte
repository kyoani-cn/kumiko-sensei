<script>
    import { playAudioByVid } from '../../../functions/audio.mjs'
    import QuizFootSkipAndCheck from './components/QuizFootSkipAndCheck.svelte'
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
            <h1>听读音选日文</h1>
            <div class="quiz-two-box">
                <button class="ui-play-vocal" on:click={playVocal} data-key="Space">播放语音</button>
                <div class="ui-selects">
                    {#each quiz.chioces as chioce, index}
                    <div class="option-item" 
                        on:click={()=>selectIndex(index)} 
                        data-key={index+1}
                        data-selected={currentSelectIndex === index}>
                        {chioce}
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <QuizFootSkipAndCheck onSkip={onSkip} onCheck={onCheck} disabledCheck={currentSelectIndex === null} />
    <!-- <button class="ui-btn min green" on:click={over}>over</button> -->
</div>
{/if}

