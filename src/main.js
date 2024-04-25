import './less/app.less'
import App from './App.svelte'

import './functions/os.mjs'

import './functions/key.function.mjs'


const app = new App({
  target: document.getElementById('app'),
})

export default app
