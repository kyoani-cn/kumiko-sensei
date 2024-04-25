<script>
import { createExam } from '../../functions/api.mjs'
import Quiz from './Quiz.svelte';
import { stopAudio } from '../../functions/audio.mjs'
import { playAdari } from '../../functions/ena.mjs'
let exam = null;
let loading = false;
let status = 'loading';
let results = [];
const startExam = async () => {
    loading = true;
    exam = await createExam();
    loading = false;
    currentQuizIndex = 0;
    status = 'exam';
    results = [];
}


$: currentQuiz = (()=> {
    if(!exam) return null;
    return exam.quizs[currentQuizIndex];
})();


let currentQuizIndex = -1;


startExam();


const examOver = () => {
    console.log('考试结束');
    status = 'result';
}

const nextQuiz = () => {
    stopAudio();

    currentQuizIndex++;
    if(currentQuizIndex >= exam.quizs.length) {
        currentQuizIndex= -1;
        examOver();
    }
}

let score = 0;
$: resultTitle = (() => {
    if(score === 10) return '当之无愧的京吹大师！';
    if(score >= 8) return '京吹上手！';
    if(score >= 6) return '还行吧。';
    if(score >= 4) return '京吹初心者。';
    if(score >= 2) return '京吹小白。';
    return '八嘎！';
})();

const scoreAdd = (n) => {
    score += n;
    if(score < 0) score = 0;
}
const handleQuizOver = (v) => {
    nextQuiz();

    console.log('完成了一道题',v);

    results = [...results,v];
    if(v){
        scoreAdd(1);
        // playAdari();
    }else{
        scoreAdd(-1);
    }

}

const skip = ()=>{
    nextQuiz();
    
    scoreAdd(-1);

}

</script>

<div class="exam-box" data-loading={ loading }>
    <div class="layout exam-head">
        <a href="#/">首页</a>
        <span>{score} 分</span>
    </div>
    <!-- <h1>考试</h1> -->
    {#if exam}
    <div>
        {#if status === 'exam'}
        <div class="exam">
            <Quiz quiz={currentQuiz} on:over={handleQuizOver} on:skip={skip} />
            <!-- <h2>{exam.kid}</h2>
            <p>
                共
                {exam.quizs.length}
                题
            </p> -->
            <!-- <div>
                <h3>当前题目</h3>
                <pre>{ JSON.stringify(currentQuiz,null,'\t') }</pre>
            </div>
            -->
            <!-- {#each exam.quizs as quiz, index}
            <Quiz {quiz} on:over={handleQuizOver} on:skip={skip} />
            {/each} -->
        </div>
        {:else if status === 'result'}
        <div class="result layout">
            <h1>{resultTitle}</h1>
            <p>共{exam.quizs.length}题，正确率 {results.filter(v=>v).length / 10 * 100}%</p>
        </div>  
        {/if}
    </div>
    {:else}
    <div class="start-box">
        <button class="ui-btn min grey" on:click={startExam}>开始测试</button>
    </div>
    {/if}
</div>