export const showToast = (msg,className, duration = 2000) => {
    const toast = document.createElement('div');
    toast.classList.add('ui-toast');
    toast.classList.add(className);
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, duration);
}