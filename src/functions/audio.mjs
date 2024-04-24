const audio = new Audio();


export const playAudio = (url) => {
    audio.src = url;
    audio.play();
}

import { getVocalURLByVid } from './api.mjs'
export const playAudioByVid = vid=>{
    const url = getVocalURLByVid(vid)
    playAudio(url)
}

export const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
}
