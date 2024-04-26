// 判断元素是否在DOM中
const isElementInDom = (el) => {
    if(!el) return false;
    return document.body.contains(el);
}


const blockEl = document.createElement('div');
blockEl.style.cssText += `position: fixed; z-index: 999; left: 0; top: 0; `+
    `width: 100%; height: 100%;pointer-events: auto;`;



const bodyEl = document.body;
const animationFunction = (el) => {
    if(!el) return;


    // 实际动画元素
    const animationEl = el.querySelector('[data-animation-el]') || el;
    
    const rect = animationEl.getBoundingClientRect();
    // console.log(animationEl,rect);

    const animationElCloned = animationEl.cloneNode(true);
    animationElCloned.style.cssText += `position: absolute; z-index: 1000; left: ${rect.left}px; top: ${rect.top}px; width: ${rect.width}px; height: ${rect.height}px; pointer-events: none;`;
    bodyEl.appendChild(animationElCloned);

    // 隐藏初始元素
    animationEl.style.visibility = 'hidden';

    bodyEl.appendChild(blockEl);


    const getAttr = el.getAttribute.bind(el);
    const animationClassName = getAttr('data-animation-in') || 'zoomOut';
    const duration = getAttr('data-animation-in-duration') || '1s';


    // console.log(animationEl, animationClassName, duration, animationEl.getAttribute('data-animation-in'))

    let shadowEl = null;
    let shadowElCloned = null;

    // shadow
    const shadowSelector = getAttr('data-animation-in-shadow');
    if(shadowSelector) {

        shadowEl = document.querySelector(shadowSelector);
        if(shadowEl){
            shadowElCloned = shadowEl.cloneNode(true);
            const shadowRect = shadowEl.getBoundingClientRect();
            shadowElCloned.style.cssText += `position: absolute; z-index: 998; left: ${shadowRect.left}px; top: ${shadowRect.top}px;`+
                ` width: ${shadowRect.width}px; height: ${shadowRect.height}px; pointer-events: none;`;
            bodyEl.appendChild(shadowElCloned);



            const shadowClassName = 'opacityOut';
            const shadowDuration = '1s';
        
            shadowElCloned.style.animationDuration = shadowDuration;
            shadowElCloned.addEventListener('animationend', e => {
                shadowElCloned.remove();
            });
        
            shadowElCloned.classList.add(shadowClassName);
        }
    }

    // 开始动画准备
    animationElCloned.style.animationDuration = duration;

    // 动画结束回调
    animationElCloned.addEventListener('animationend', e => {
        // animationEl.classList.remove(animationClassName);
        animationElCloned.remove();
        blockEl.remove();



        setTimeout(() => {
            if(!isElementInDom(animationEl)) return;

            animationEl.addEventListener('animationend', e => {
                animationEl.classList.remove('opacityIn');
            });
            
            animationEl.classList.add('opacityIn');
            animationEl.style.visibility = '';


        }, 200);
    });

    requestAnimationFrame(() => {
        animationElCloned.classList.add(animationClassName);
    });

    // console.log(el)
}

bodyEl.addEventListener('mouseup', e => {
    if(e.button !== 0) return;
    const el = e.target.closest('[data-animation-in]');
    animationFunction(el);
});
bodyEl.addEventListener('touchend', e => {
    const el = e.target.closest('[data-animation-in]');
    animationFunction(el);
})