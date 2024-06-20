
import { fetchJSON } from './fetch.mjs'

import { BASE_API_URL, BASE_VOCAL_URL } from '../config.mjs'


export const U = path => `${BASE_API_URL}${path}`

export const createExam = async ()=>{
    const exam = await fetchJSON(U('exam'))

    return exam
}

export const endExam = async (exam)=>{
    console.log(exam);
}


export const getVocalURLByVid = vid=>{
    return `${BASE_VOCAL_URL}${vid}.m4a`
}