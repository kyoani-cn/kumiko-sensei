import Home from './views/Home.svelte';
import Exam from './views/exam/Exam.svelte'
import Components from './views/Components.svelte';

export const routes = new Map();
routes.set('/', Home);
routes.set('/exam', Exam);
routes.set('/components', Components);