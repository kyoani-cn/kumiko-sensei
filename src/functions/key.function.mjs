
const KeyCode = {
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Space": "Space",
    "Enter": "Enter"
}
document.addEventListener('keydown', e => {
    const key = KeyCode[e.code];
    if(!key) return;

    const firstKeyEl = document.querySelector(`[data-key="${key}"]`);
    if(!firstKeyEl) return;
    
    if(firstKeyEl.disabled) return;

    firstKeyEl.classList.add('active');

})
document.addEventListener('keyup', e => {
    const key = KeyCode[e.code];
    if(!key) return;

    // KeyCode[e.code] = e.key;
    // console.log(JSON.stringify(KeyCode))
    const firstKeyEl = document.querySelector(`[data-key="${key}"]`);
    if(!firstKeyEl) return;

    if(firstKeyEl.disabled) return;

    
    firstKeyEl.classList.remove('active');

    firstKeyEl.click();
    e.preventDefault();
})