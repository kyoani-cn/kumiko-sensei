<script>
import { createExam, endExam } from '../../functions/api.mjs'
import Quiz from './Quiz.svelte';
import { playAudioByVid, stopAudio } from '../../functions/audio.mjs'
import ExamResult from './ExamResult.svelte';
import Progress from '../../components/Progress.svelte';
import { getUnixTimestamp } from '../../functions/unix.mjs'
import QuizFoot from './quiz-types/components/QuizFoot.svelte';
import { getOne } from '../../functions/rand.function.mjs';
import Score from '../../components/Score.svelte';


let exam = null;
let status = 'hello';
let results = [];
let started = null;
const startExam = async () => {
    status = 'loading';
    exam = await createExam();
    status = 'loading';
    currentQuizIndex = 0;
    status = 'exam';
    results = [];
    started = getUnixTimestamp();
    ended = null;
}


$: currentQuiz = (()=> {
    if(!exam) return null;
    return exam.quizs[currentQuizIndex];
})();


let currentQuizIndex = -1;

$: progress = status ==='result' ? 1 : currentQuizIndex / 10;

let ended = null;
let usedMs = 0;

// 考试结束
const examOver = () => {
    ended = getUnixTimestamp();
    usedMs = ended - started;
    status = 'result';

    console.log('考试结束',{
        exam,
        score,
        results,
        started,
        ended,
        usedMs,
    });
    endExam(exam);
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

const onSkip = ()=>{
    nextQuiz();
    
    scoreAdd(-1);

}


// 软件开启音效
playAudioByVid(getOne(['7/1965c','f/0c92d']));

</script>

<div class="exam-box" data-loading={ status === 'loading' } data-status={status}>
    <div class="layout exam-head">
        <div class="ui-exit-btn" style="width: 3em;text-align: right;">
            <a href="#/">退出</a>
        </div>
        <Progress progress={progress} />
        <Score score={score} />
    </div>
    <!-- <h1>考试</h1> -->
    {#if status === 'hello'}
    <div class="layout">
        <div class="start-box ui-middle-box">
            <button class="ui-btn big blue" on:click={startExam} data-key="Enter">开始测试</button>
            <div class="tip">可使用 <b>空格</b> 播放、<b>回车</b> 前进</div>
        </div>
    </div>
    <QuizFoot>
        <div style="font-size: 12px;">
            久美子语音整理：<span>炭炭</span><br>
            程序：<span>toto</span>
        </div>
        <!-- <div style="text-align: right;font-size: 12px;">
            反馈群<br>
            <GroupLink />
        </div> -->
    </QuizFoot>
    {:else if status === 'loading'}
    <div class="layout">
        <div class="ui-middle-box">
            <h1>加载中…</h1>
        </div>
    </div>
    {:else if status === 'exam'}
    {#if exam}
    <div>
        <div class="exam">
            <Quiz quiz={currentQuiz} onOver={handleQuizOver} onSkip={onSkip} />
            <!-- {#each exam.quizs as quiz, index}
            <Quiz {quiz} onOver={handleQuizOver} onSkip={onSkip} />
            {/each} -->
        </div>
    </div>
    {/if}
    {:else if status === 'result'}
    <ExamResult score={score} results={results} exam={exam}/>
    <!-- {:else} -->
    {/if}
</div>