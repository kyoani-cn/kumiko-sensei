import Home from './views/Home.svelte';
import Exam from './views/exam/Exam.svelte'


export const routes = new Map();
routes.set('/', Home);
routes.set('/exam', Exam);