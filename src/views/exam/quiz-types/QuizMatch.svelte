<script>
    import { createEventDispatcher } from "svelte";
    import { playAudioByVid } from "../../../functions/audio.mjs";
    import { showToast } from "../../../functions/toast.mjs";
    import { randLength5Array } from "../../../functions/rand.function.mjs";
    export let quiz = null;

    const dispatch = createEventDispatcher();
    
    let vocals;
    let textsIndex;
    let completedIndexes = [];
    let errorIndexes = [];
    $: {
        if(quiz){
            vocals = quiz.vocals;
            textsIndex = vocals.map((vocal, index) => index);
            
            // 确保 textIndex 和 vocals 每个元素 Index 都不一致
            textsIndex = randLength5Array(textsIndex);
        }
    }

    let timer;

    const checkSelect = (index,type)=>{
        if(currentSelectTextIndex === null) return;
        if(currentSelectVocalIndex === null) return;

        if(currentSelectTextIndex === currentSelectVocalIndex){
            showToast('回答正确','success');
            completedIndexes.push(index);
            completedIndexes = completedIndexes;
            currentSelectTextIndex = null;
            currentSelectVocalIndex = null;
        }else{
            showToast('回答错误','success');
            // errorIndexes.push(currentSelectVocalIndex);
            // errorIndexes = errorIndexes;
            timer = setTimeout(() => {
                errorIndexes = [];
            }, 1000);
        }
        clearTimeout(timer);
        currentSelectTextIndex = null;
        // currentSelectVocalIndex = null;
        if(completedIndexes.length === vocals.length){
            dispatch('over',true);
        }

    }

    let currentSelectTextIndex = null;
    const selectText = (index)=>{
        if(currentSelectTextIndex === index) return currentSelectTextIndex = null;
        currentSelectTextIndex = index;

        checkSelect(index,'text');
    }


    let currentSelectVocalIndex = null;
    const selectVocal = (vocal,index)=>{

        if(currentSelectVocalIndex === index) return currentSelectVocalIndex = null;

        
        playAudioByVid(vocal.vid);
        currentSelectVocalIndex = index;
        
        checkSelect(index,'vocal');
    }

    const over = (v) => {
        dispatch('over',v);
    }

</script>

{#if quiz}
<div class="quiz-box">
    <div class="layout quiz-middle-box">
        <div class="quiz-middle-content-box">
            <h1>匹配中文和读音</h1>
            <div class="texts-vocals-box">
                <div class="ui-selects">
                    {#each textsIndex as index}
                    <div class="option-item"
                        on:click={()=>selectText(index)} 
                        data-selected={index === currentSelectTextIndex}
                        data-completed={completedIndexes.includes(index)}
                        data-error={errorIndexes.includes(index)}
                        >{vocals[index].cn}</div>
                    {/each}
                </div>
                <div class="ui-selects">
                    {#each vocals as vocal, index}
                    <div class="option-item"
                        on:click={()=>selectVocal(vocal,index)}
                        data-selected={index === currentSelectVocalIndex}
                        data-completed={completedIndexes.includes(index)}
                        data-error={errorIndexes.includes(index)}
                        >{vocal.jp}</div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <!-- <pre>{JSON.stringify(completedIndexes)}</pre> -->
    <div class="layout quiz-foot-box">
        <button class="ui-btn min grey" on:click={()=>dispatch('skip')}>跳过</button>
        <!-- <button class="ui-btn min green" on:click={over}>over</button> -->
    </div>
</div>
{/if}

<style lang="less">
    .texts-vocals-box{
        &:after{
            content: '';
            display: block;
            clear: both;
        }
        .ui-selects{
            float: left;
            width: 240px;
            margin-right: -8px;
        }
    }
</style>