const animationFunction = (el) => {
    if(!el) return;

    const animationEl = el.querySelector('[data-animation-el]') || el;
    
    const rect = animationEl.getBoundingClientRect();
    console.log(animationEl,rect);

    const animationElCloned = animationEl.cloneNode(true);
    animationElCloned.style.cssText += `position: absolute; z-index: 1000; left: ${rect.left}px; top: ${rect.top}px; width: ${rect.width}px; height: ${rect.height}px; pointer-events: none;`;
    document.body.appendChild(animationElCloned);

    const animationClassName = animationEl.getAttribute('data-animation-in') || 'zoomOut';
    const duration = animationEl.getAttribute('data-animation-in-duration') || '1s';
    animationElCloned.style.animationDuration = duration;
    animationElCloned.addEventListener('animationend', e => {
        // animationEl.classList.remove(animationClassName);
        animationElCloned.remove();
    });

    requestAnimationFrame(() => {
        animationElCloned.classList.add(animationClassName);
    });
    console.log(el)
}

document.body.addEventListener('mouseup', e => {
    const el = e.target.closest('[data-animation-in]');
    animationFunction(el);
});
document.body.addEventListener('touchend', e => {
    const el = e.target.closest('[data-animation-in]');
    animationFunction(el);
})