const arr = [0,1,2,3,4];

const Indexes = {};
const arrIndexHit = (a,b)=>{
    for(let i in a){
        if(a[i] === b[i]){
            return true;
        }
    }

    return false;
}
const arrIndexHitNum = (a,b)=>{
    let hit = 0;
    for(let i in a){
        if(a[i] === b[i]){
            hit++;
        }
    }
    return hit;
}

for(let i = 0; i < 100000; i++){
    const arr2 = arr.slice().sort(()=>Math.random() - 0.5);
    const hitNum = arrIndexHitNum(arr2, arr);
    if(hitNum > 2) continue;
    Indexes[arr2.join('')] = arr2;
}


const indexes = Object.values(Indexes);


console.log(indexes.length);
console.log(indexes);
copy(JSON.stringify(indexes).replace(/],/g, '],\n'));