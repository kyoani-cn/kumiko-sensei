<script>
import { createExam } from '../../functions/api.mjs'
import Quiz from './Quiz.svelte';
import { stopAudio } from '../../functions/audio.mjs'
import { playAdari } from '../../functions/ena.mjs'
import ExamResult from './ExamResult.svelte';
    import Progress from '../../components/Progress.svelte';
let exam = null;
let status = 'hello';
let results = [];
const startExam = async () => {
    status = 'loading';
    exam = await createExam();
    status = 'loading';
    currentQuizIndex = 0;
    status = 'exam';
    results = [];
}


$: currentQuiz = (()=> {
    if(!exam) return null;
    return exam.quizs[currentQuizIndex];
})();


let currentQuizIndex = -1;

$: progress = status ==='result' ? 1 : currentQuizIndex / 10;


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

<div class="exam-box" data-loading={ status === 'loading' }>
    <div class="layout exam-head">
        <div style="width: 2em;padding: 0 0 0 1em;">
            <a href="#/">退出</a>
        </div>
        <Progress progress={progress} />
        <div style="width: 3em;">
            <b>{score}</b>
            分
        </div>
    </div>
    <!-- <h1>考试</h1> -->
    {#if status === 'hello'}
    <div class="layout">
        <div class="start-box">
            <button class="ui-btn blue" on:click={startExam}>开始一局测试</button>
        </div>
    </div>
    {:else if status === 'loading'}
    <div class="layout">
        <div class="loading-box">
            <h1>加载中…</h1>
        </div>
    </div>
    {:else if status === 'exam'}
    {#if exam}
    <div>
        <div class="exam">
            <Quiz quiz={currentQuiz} on:over={handleQuizOver} on:skip={skip} />
            <!-- {#each exam.quizs as quiz, index}
            <Quiz {quiz} on:over={handleQuizOver} on:skip={skip} />
            {/each} -->
        </div>
    </div>
    {/if}
    {:else if status === 'result'}
    <ExamResult score={score} results={results} exam={exam}/>
    {:else}

    {/if}
</div>