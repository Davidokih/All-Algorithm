
// class lucia{
//    constructor(firstName,lastName){
//     this.firstName= firstName;
//     this.lastName = lastName;
//    }

//    yourName(){
//        console.log(`welcome ${this.firstName} ${this.lastName}`)
//    }
// }

// const newCharacter = new lucia("peter","oti")

// newCharacter.yourName();

// const model = (n) =>{
//    const xx =[];
//    const x = n.split(" ")
//    console.log(x);
//    for (const s of x) {
//       xx.push(s.length)
//    }
//    console.log("This is",xx)
//    console.log(Math.min(...xx))
//    console.log(`${Math.min(...xx)}. ${x.slice(1,2)}`)
// }

// model("This is the day that the lord as made")


// const model2 = (n) =>{
//    const e = n.replace(/[aeiou]/gi,'')
//    console.log(e)
//  }
 
//  model2("Banana as touch the ground")
 


// const model3=(n)=>{
//    const letters ="abcdefghijklmnopqrstuvwxyz".split("")
//    return n.replace(/[a-z]/gi, function (el) {
//       return letters.indexOf(el.toLowerCase()) + 1
//    })
// }
// console.log(model3('This is when the sunset in the evening'))



// const word =(w)=>{
//    const a = w.split(" ")
//    const myword = []

//    for (const s of a) {
//       myword.push(s.length)
//    }
//    console.log(a)
//    console.log(Math.max(...myword))
// }
// word("the march was great")


// const x = ["micheal","dickson","tobi","blessing"]
//     x.push("precious")
// let y=[]
// for (const s of x) {
//     y.push(s)
// }
// console.log(y)


// const model =(n)=>{
//    let a= n.toString().split("")
//     // a.split("")
//    a.splice(-3, 0, ",")
//    let aa = a.join("")
//     console.log(aa)
// }

// model(3000)
// // console.log(model(3000))













//write and explain at least three method of console





// const Factoria =(n)=>{
//     if(n < 0){
//         return 1;
//     }else if(n == 1){
//         return 0
//     }

//     return n + Factoria(n - 1)
// }

// Factoria(6)

// console.log(Factoria(6))


//console log print message to the browser
//console error write an error message to the browser console
//console info write message to the browser console


// const letters =(a, b, c)=>{
//     let Va = a.split("") 
//     let Vb = b.split("") 
//     let Vc = c.split("") 

//     // console.log(Va)

//     for(i = 0; i <= Va.length; i++){
//         for(j = 0; j <= Vb.length; j++){
//             for(k = 0; k<= Vc.length; k++){
//                 if(i,j,k = /[a-z]/){

//                 }
//             }
//         }
//     }
// }


// letters('aa','bb','cc')


function narcissistic(value) { 
    let info = value.toString()

    let valueString = info.split('')

    // console.log(valueString)
        x=[]; y = 0
    for(i = 0; i < valueString.length; i++){
       let element= parseInt( valueString[i])
        // console.log(valueString[i])
        let indexValue = Math.pow( element, valueString.length)
        x.push(indexValue)
        console.log(x)
        y += x[i]
        // console.log(y)
    }

    if(y == value){
        return true
    }else{
        return false
    }

}


// narcissistic(153)
// console.log(narcissistic(153))



const minMax =(value)=>{
    let array = value.toString().split('')
    let x = []
    let minValue = array[0]
    let maxValue = array[0]

    for(i = 0; i < array.length; i++){
        let element = parseInt(array[i])
        x.push(element)
       
        for(j = 0; j < x.length; j++){
            
            if(minValue > x[j]){
                minValue = x[j]
            }
            if(maxValue < x[j]){
                maxValue = x[j]
            }
        }

    }
    return [minValue, maxValue] 
    
}

console.log(minMax(2378591))

let array = [2,3,7,8,5,9,1]
let minValue = array[0]
    let maxValue = array[0]
for(i = 0; i < array.length; i++){

    if(minValue < array[i]){
        minValue = array[i]
    }
    if(maxValue > array[i]){
        maxValue = array[i]
    }
}

// console.log(maxValue)
// console.log(minValue)