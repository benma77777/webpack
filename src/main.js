import './ben.js'
import './ma.js'
import './styles/index.css'
import './styles/index.less'
// 引入vue
import App from './app.vue'


import pngSrc from './assets/logo_small.png'
import gifSrc from './assets/1.gif'


import './assets/fonts/iconfont.css'
const png = document.createElement('img')
const gif = document.createElement('img')
png.src = pngSrc
gif.src = gifSrc

document.body.appendChild(png)
document.body.appendChild(gif)

const fn = () => {
    console.log('77777');
}
console.log(fn);


