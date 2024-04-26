<script>
    import { showToast } from "../functions/toast.mjs";


</script>
<header>
    <nav>
        <a href="#/">首页</a>
    </nav>
</header>
<div class="layout">
    <div class="ui-selects">
        <div class="option-item">选项1</div>
        <div class="option-item">选项选项2</div>
        <div class="option-item" data-selected="true">选项选项选项选项选项3</div>
        <div class="option-item" data-selected="true" data-completed="true">选项选项选项选项选项3</div>
        <div class="option-item">选项选项选项4</div>
    </div>
    <div>
        <button class="ui-btn min grey" on:click={()=>showToast('提示','success')}>showToast success</button>
        <button class="ui-btn min grey" on:click={()=>showToast('提示','error')}>showToast error</button>
    </div>
    <div style="padding: 20px 0;">
        <div class="ui-app" data-animation-in="zoomOut10" data-animation-in-shadow="#app" style="--app-color: #E75E44;">
            <div class="ui-icon size-128" data-animation-el></div> 
            <h2 class="title">酷米空</h2>
        </div>
        <div></div>
        <div class="ui-app" style="--app-color: #E75E44;
            perspective: 500px;">
            <div class="ui-icon size-128" style="
                transform: scale3d(1.2, 1.2, 1.2) rotateX(35deg);
            "></div> 
            <h2 class="title">酷米空</h2>
        </div>
    </div>
    <div style="padding: 20px 0;">
        <button class="ui-btn big blue" data-key="Space" data-animation-in="zoomOut" data-animation-in-duration=".8s">开始测试</button>
    </div>
</div>