<script>
import { createExam } from '../../functions/api.mjs'
import Quiz from './Quiz.svelte';

let exam = null;
let loading = false;
const startExam = async () => {
    loading = true;
    exam = await createExam();
    loading = false;
    currentQuizIndex = 0;
}


$: currentQuiz = (()=> {
    if(!exam) return null;
    return exam.quizs[currentQuizIndex];
})();


let currentQuizIndex = -1;


startExam();

const handleQuizOver = () => {

    console.log('完成了一道题');
    currentQuizIndex++;
    if(currentQuizIndex >= exam.quizs.length) {
        currentQuizIndex= -1;
    }
}

</script>

<div class="exam-box" data-loading={ loading }>
    <a href="#/">回首页</a>
    <h1>考试</h1>
    {#if exam}
    <div class="exam">
        <h2>{exam.kid}</h2>
        <p>
            共
            {exam.quizs.length}
            题
        </p>
        <!-- <div>
            <h3>当前题目</h3>
            <pre>{ JSON.stringify(currentQuiz,null,'\t') }</pre>
        </div>
         -->
        {#each exam.quizs as quiz, index}
        <Quiz {quiz} on:over={handleQuizOver} />
        {/each}
    </div>
    {:else}
    <div class="start-box">
        <button on:click={startExam}>开始测试</button>
    </div>
    {/if}
</div>