const prompt = require("prompt-sync")();

// let luckyNumber = Math.floor(Math.random() * 10);
// while (true) {
    
    // let guessValue = parseInt(prompt("What is my lucky Number: "));

//     if (luckyNumber === guessNumber) {
//         console.log("wow... you guessed my mind, right!")
//         break;
//     }else if(luckyNumber > guessNumber){
//         console.log("you're wrong");
//         console.log("your input is too low..." + luckyNumber);
//     }else if(luckyNumber < guessNumber){
//         console.log("you're wrong");
//         console.log("your input is too HIGH..." + luckyNumber)
//     }

// }

// let n = [1,2,3,4,5,6]

// const yourSearch=(x)=>{
//     for (let i = 0; i < n.length; i++) {
//         if (x === n[i]) {
//             console.log(`the index is value ${i}`)
//         }
//     }
// }

//if it takes a student 1000hrs to score A
// 800 B
// 700 C
// 600 E
// 500 F

// let period = 0

let luckyNumber = Math.floor(Math.random() * 10);

const scores = [
    {hrs: 1000, grade: "A"},
    {hrs: 800, grade: "B"},
    {hrs: 700, grade: "C"},
    {hrs: 600, grade: "E"},
    {hrs: 500, grade: "F"}
]

for(let i = 0; i < scores.length; i++) {
    const element = scores[i];
    // console.log(element.hrs)

    while (true) {
        let period = parseInt(prompt("Insert your pedriod: "))
        if (period === element.hrs) {
            console.log(`Your grade ${element.hrs}`)
            let guessValue = parseInt(prompt("What is my lucky Number: "));
            if (guessValue === luckyNumber) {
                console.log("You answer is correct")
                let continueOrBreake = (prompt("Enter q to stop: "));
                if (continueOrBreake === "q") {
                    console.log(`Your score is ${element.grade}`)
                    break;
                }else{
                    continue;
                }
            }else{
                console.log("Fail")
                let continueOrBreake = (prompt("Enter q to stop: "));
                if (continueOrBreake === "q") {
                    console.log(`Your score is ${element.grade}`)
                    break;
                }else{
                    continue;
                }
            }
        }else{
            console.log("Wrong Input")
            break;
        }
    }
}

// while (period <= scores) {
//     if(period === 1000){
//         console.log(`period inserted is 1000 to score "A"`)
//     }
//     if (guessValue === luckyNumber) {
//         console.log(`The period inserted ${period}`)=
//         console.log("wow... you guessed my mind, right!")
//     }
// }

//track the hr of time it takes a student to score A



// const dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const dataSet1 = {1: "one", 2: "two", 3:"three", 4: "four", 5:"five", 6:"six", 7:"seven",8:"eight",9:"nine", 10:"ten" };
// let newData = []

// for(let x of dataSet){
//     newData.push(dataSet[x])
// }
// console.log(newData)
// const mySearch = (array, target) =>{
//     let left = 0;
//     let right = array.length - 1;
    
//     while (left < right) {
//         let mid = Math.floor((left + right)/2)
//         if (target === array[mid]) {
//             return mid;
//         }else if(target < array[mid]){
//             left = mid - 1
//         }else{
//             right = mid + 1;
//         }
//     }
    
// }

// console.log(mySearch(dataSet, 1))

// const dataSet = [1,2,3,4,5,6,7]

// const mySearch =(array, target)=>{
//     return mySearchRecur(array, target, 0, array.length)
// }

// const mySearchRecur =(array, target, left, right)=>{

    
//         let mid = Math.floor((left + right) / 2)

//         if (left > right) {
//             return undefined
//         }

//         if (target === array[mid]) {
//             return mid
//         }else if (target < array[mid]) {
//             mySearchRecur(array, target, mid - 1, right)
//         }else{
//             mySearchRecur(array, target, left, mid + 1)
//         }
// }


// console.log(mySearch(dataSet, 2))

const myTree = require('treeify')

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchModel{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root

        if (value < current.value) {
            if (!current.left) {
                current.left = newNode
                return this
            }
            current.left = current
        }else if (value > current.value) {
            if (!current.right) {
                current.right = newNode
                return this
            }
            current.right = current
        }
    }
}

const newSearched = new BinarySearchModel()

newSearched.insert(15)
newSearched.insert(20)
newSearched.insert(10)
// newSearched.insert(9)
// newSearched.insert(19)


// console.log(myTree.asTree(newSearched, true))

// let myArray = [1,2,3,4,5,6,7,8,9]

// const mySearch = (array, target)=>{
//     let left = 0
//     let right = array.length
//     return mySearchRecursive(array, target, left, right)
// }

// const mySearchRecursive =(array, target, left, right)=>{
//     let mid = left + right/2

//     if (left > right) {
//         return undefined
//     }

//     if (target === array[mid]) {
//         return mid
//     }else if(target < array[mid]){
//         return mySearchRecursive(array, target, mid - 1, right)
//     }else{
//         return mySearchRecursive(array, target,left, mid + 1)
//     }
// }

// console.log(mySearch(myArray, 2))

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class mySearchModel{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if (!this.root) {
//             this.root = newNode
//             return this
//         }

//         let  current = this.root

//         if (value < current.value) {
//             if (!current.left) {
//                 current.left = newNode
//                 return this
//             }
//             current.left = current
//         }else if (value > current.value) {
//             if (!current.right) {
//                 current.right = newNode
//                 return this
//             }
//             current.right = current
//         }else if(value === current.value){
//             return undefined
//         }
//     }
// }



// const x = [22,4,66,23,70,50,21]

// let y = x.sort((a,b)=>{
//     return a - b
// })

// console.log(y)






