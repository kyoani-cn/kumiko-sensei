import { RAFSync, delaySync } from './delay.mjs';

export const showToast = async (msg,className, duration = 2000) => {
    const toast = document.createElement('div');
    toast.classList.add('ui-toast');
    toast.classList.add(className);
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    await RAFSync();
    toast.classList.add('fadeIn');

    await delaySync(duration);

    toast.addEventListener('animationend', e => {
        toast.remove();
    });
    toast.classList.add('fadeOut');
}