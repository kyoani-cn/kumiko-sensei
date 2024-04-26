<script>
    import GroupLink from "../components/GroupLink.svelte";
    import QuizFoot from "./exam/quiz-types/components/QuizFoot.svelte";

</script>
<div class="view-home">
    <div class="layout">
        <div class="head">
            <h1>粳米团子</h1>
            <nav>
                <a href="https://kyoani.cn/" target="_blank">黄页</a>
                <!-- <a href="#/components">组件</a> -->
                <!-- <a href="#/about">关于</a> -->
            </nav>
        </div>
        <div class="ui-middle-box ui-app-list">
            <a href="#/exam" class="ui-app" style="--app-color: #E75E44" 
                data-animation-in="zoomOut10"
                data-animation-in-shadow="#app">
                <div class="ui-icon size-128" data-animation-el></div>
                <h2 class="title">酷米空</h2>
            </a>
        </div>
    </div>
    <QuizFoot>
        <div>
            <a href="https://github.com/kyoani-cn/kumiko-sensei" target="_blank">GitHub</a>
            <span style="margin: 0 2px;color: #AAA;">·</span>
            <GroupLink>开发群</GroupLink>
        </div>
        <a href="https://lab.magiconch.com/" target="_blank">神奇海螺试验场</a>
    </QuizFoot>
</div>