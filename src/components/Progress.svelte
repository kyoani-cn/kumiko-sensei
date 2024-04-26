<script>
export let progress = 0;

$: progress100 = Math.ceil(Math.max(0,progress) * 100);
</script>

<div class="ui-progress" data-progress={progress100}>
    <div class="progress-bar" style="width: {progress100}%"></div>
</div>