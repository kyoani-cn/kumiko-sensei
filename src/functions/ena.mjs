
import { getOne } from './rand.function.mjs';

import { playAudio } from './audio.mjs';


const adariAudios = [
    '45-adari1',
    '45-adari2',
    '45-adari3',
];
export const playAdari = () => {
    const url = `audios/${getOne(adariAudios)}.m4a`;
    playAudio(url);
}