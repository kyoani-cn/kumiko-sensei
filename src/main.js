import './less/app.less'
import App from './App.svelte'

import './functions/os.mjs'

import './functions/key.function.mjs'
import './functions/animation.function.mjs'


const app = new App({
  target: document.body,
})

export default app
