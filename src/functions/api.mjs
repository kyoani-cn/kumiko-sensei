
import { fetchJSON } from './fetch.mjs'

import { BASE_API_URL } from '../config.mjs'


export const U = path => `${BASE_API_URL}${path}`

export const createExam = async ()=>{
    const exam = await fetchJSON(U('exam'))

    return exam
}



export const getVocalURLByVid = vid=>{
    return `https://192.168.31.2:5501/vocals-hex/${vid}.m4a`
}