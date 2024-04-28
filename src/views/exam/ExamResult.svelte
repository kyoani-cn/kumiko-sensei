<script>
import GroupLink from "../../components/GroupLink.svelte";

export let score = 10;
export let exam = null;
export let results = [];

$: resultTitle = (() => {
    if(score === 10) return '当之无愧的京吹大师！';
    if(score >= 8) return '京吹上手！';
    if(score >= 6) return '还行吧。';
    if(score >= 4) return '京吹初心者。';
    if(score >= 2) return '京吹小白。';
    return '八嘎！';
})();
</script>

{#if exam}
<div class="ui-middle-box result">
    <div class="content">
        <div style="padding: 10px;">
            <h1>{resultTitle}</h1>
            <p>共 {exam.quizs.length} 题，正确率 {results.filter(v=>v).length / 10 * 100}%</p>
            <!-- <p>{JSON.stringify(results)}</p> -->
            <p>获得 {score} 分</p>
        </div>
        <div style="padding: 20px 0 10;">
            <a href="#/" class="ui-btn" data-key="Enter">回首页</a>
        </div>
    </div>
    <div class="join">
        <h4>一起来建设！</h4>
        <div class="content">
            <p>
                对 美术、界面、内容、程序 感兴趣，<br>
                欢迎来 开发群 <GroupLink /> 一起聊聊
            </p>
        </div>
    </div>
</div> 
{/if}

<style lang="less">
.result {
    flex-direction: column;
    .content{
        max-width: 800px;
        h1{
            padding-bottom: 10px;
        }
    }
}

.join{
    padding: 20px;
    .content{
        font-size: 12px;
        padding: 4px 0;
    }
}
</style>