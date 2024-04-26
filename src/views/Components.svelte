<script>
    import { showToast } from "../functions/toast.mjs";


</script>
<div class="layout">
    <div class="ui-selects">
        <div class="option-item">选项1</div>
        <div class="option-item">选项选项2</div>
        <div class="option-item">选项选项选项选项选项3</div>
        <div class="option-item">选项选项选项4</div>
    </div>
    <div>
        <button class="ui-btn min grey" on:click={()=>showToast('提示','success')}>showToast success</button>
        <button class="ui-btn min grey" on:click={()=>showToast('提示','error')}>showToast error</button>
    </div>
</div>