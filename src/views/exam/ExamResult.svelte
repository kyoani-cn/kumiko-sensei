<script>
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
<div class="result layout">
    <div class="content">
        <h1>{resultTitle}</h1>
        <p>共 {exam.quizs.length} 题</p>
        <p>获得 {score} 分</p>
        <p>正确率 {results.filter(v=>v).length / 10 * 100}%</p>
        <div style="padding: 20px 0 0;">
            <a href="#/" class="ui-btn">回首页</a>
        </div>
    </div>
</div> 
{/if}

<style lang="less">
.result {
    display: flex;
    min-height: 800px;
    justify-content: center;
    align-items: center;
    .content{
        max-width: 800px;
        h1{
            padding-bottom: 10px;
        }
    }
}
</style>