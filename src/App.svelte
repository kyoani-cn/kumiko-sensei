<script>
  import Header from './components/Header.svelte';
	import Router from 'svelte-spa-router';
	import { routes } from "./routes.mjs";
</script>

<main>
  <Router {routes} restoreScrollState={true} />
</main>