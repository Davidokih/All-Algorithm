const myArray = [9,1,5,7,0,3,8]

// myArray.sort((a,b)=>{
//     return a.age - b.age
// })

// console.log(myArray)

const a = myArray
const n = a.length

for(i = 0; i < n - 1; i++){
    for(j = 0; j < n -1; j++){
        if(a[j] > a[j + 1]){
            let swap = a[j]
            a[j] = a[j + 1]
            a[j + 1] = swap
        }
    }
}

// console.log(a);


const mergeSort = (array)=>{
    if (array.length < 2) {
        return array
    }

    const mid = Math.floor(array.length / 2);

    const myLeft = array.slice(0, mid)
    const myRight = array.slice(mid, array.length)

    return merge(mergeSort(myLeft), mergeSort(myRight))
}

const merge = (left, right)=>{
    let result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    while (left.length) {
            result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }
    return result
}

const myArray2 = [9,1,5,7,0,3,8]

console.log(mergeSort(myArray2))