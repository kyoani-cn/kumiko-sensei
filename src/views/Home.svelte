<script>
    import QuizFoot from "./exam/quiz-types/components/QuizFoot.svelte";

</script>
<div class="view-home">
    <div class="layout">
        <div class="head">
            <h1>粳米团子</h1>
            <nav>
                <a href="#/components">组件</a>
                <!-- <a href="#/about">关于</a> -->
            </nav>
        </div>
        <div class="ui-middle-box ui-app-list">
            <a href="#/exam" class="ui-app" style="--app-color: red">
                <div class="ui-icon size-128"></div>
                <h2 class="title">酷米空</h2>
            </a>
        </div>
    </div>
    <QuizFoot>
        <a href="https://github.com/kyoani-cn/kumiko-sensei" target="_blank">GitHub</a>
    </QuizFoot>
</div>