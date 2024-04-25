<script>
export let progress = 0;

$: progress100 = Math.ceil(Math.max(0,progress) * 100);
</script>

<div class="ui-progress" data-progress={progress100}>
    <div class="progress-bar" style="width: {progress100}%"></div>
</div>

<style lang="less">
.ui-progress{
    display: block;
    flex-grow: 1;
    background-color: #EEE;
    border-radius: 90px;
    height: 20px;
    margin: 2px 20px;
    .progress-bar{
        height: 100%;
        min-width: 20px;
        background: #58CD02;
        border-radius: 90px;
        transition: width 0.5s ease-in-out;

    }
}
</style>