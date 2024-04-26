export const RAFSync = async () => {
    return new Promise(resolve => {
        requestAnimationFrame(()=>{
            resolve()
        })
    })
}

export const delaySync = async (ms) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve()
        },ms)
    })
}