


// let presious = 10;
// let lucia =5;

// for (let i = 0; i <= presious; i++) {
//     console.log(i)
//   if (i === lucia) {
//       console.log("hello")
//       break;
//   }
// }
// const holder= []

// const key = [7,3,2]
// const value = [0,1,2,3,4,5,6,7,8,9]
// for(i=0; i<key.length; i++){
//   let take= key[i]
//   console.log(take)
//   for(j=0; j<value.length;j++){
//     let pick= value[j]
//     // console.log(pick)
//     if(take===pick){
//       holder.push(pick)
//       break;
//     }
//   }
// }

// // holder.join(",")
// console.log(holder)
// // console.log(holder.join(""))


// const Open=(n)=>{
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       for (let k = 0; k <= n; k++) {
//         if (i===7 && j===3 && k===5) {
//           console.log("key found")
//         }else{
//           console.log(i,j,k)
//         }
//       }
//     }
    
//   }
// }

// Open(9)

// const Count = (n)=>{
//   let x = 0
//   let y = 0
//   let z =0
//   while (x <= n && y <= n && z <= n) {
//     if (x === 3) {
//       console.log("this is the key")
//     }
//     if (y === 2) {
//       console.log("this is the key")
//     }
//     if (z === 5) {
//       console.log("this is the key")
//       break;
//     }else{
//       console.log(x,y,z)
//     }
//     x++
//     y++
//     z++
//   }
// }

// Count(5)


// function permit(num) {
//   if (num < 0) 
//         return 1;
//   else if (num == 0) 
//       return 0;
//   else {
//       return (num + permit(num - 1));
//   }
// }
// permit(5);

// console.log(permit(5))

// let factorial = 0
// const fact =(n)=>{
//   for (let i = n; i >= 0; i--) {
//     factorial = factorial + i;
    
//   }
//   return console.log(factorial)
// }

// fact(6)
// console.log(factorial)

// const fact1 = (n)=>{
//   if(n < 0){
//     return null
//   }else{
//     return console.log((n/2) * (1 + n))
//   }
// }

// fact1(6)





//YOU GOT A LIST OF ITEMS WHERE EVREY ITEMS AS A VALUE AND A WEIGHT

//write a program that maximize the value of items you can put into the bag while ensuring that you don't exceed the weight




// const myItems = [
//     {
//         value: 13,
//         weight: 5
//     },
//     {
//         value: 20,
//         weight: 7
//     },
//     {
//         value: 10,
//         weight: 3
//     }
// ]

// const bag ={
//         weight: 8,
//         items: []
//     }

// const Myths = ()=>{
//     for (let i = 0; i < myItems.length; i++) {
//         const element = myItems[i];  
//         // console.log(element.weight) 
//         let itemsValue = element.value
//         let itemsWeight = element.weight 
//             // console.log(itemsWeight)
//             if (itemsWeight === bag.weight) {
//                 for (let k = 0; k < bag; k++) {
//                     // itemsWeight += itemsWeight; 
//                     const newBag = bag.weight 
//                     console.log(newBag)
//                     if (itemsWeight <= newBag || itemsWeight + itemsWeight === newBag ) {
//                         const a = bag.items.push(element)
//                         console.log(a)

//                     }
//                 }
//             }else{
//                 itemsWeight + itemsWeight
                
//             }

//     }
// }

// Myths() 




// const problem = (x)=>{
//     let n = []
//     let w = ""

//     for (let i = 0; i < x.length; i++) {
//         n.push(x[i])    
//     }

//     console.log(n)

//     for (let i = 0; i < x.length; i++) {
//         w += n.pop()
        
//     }
//     console.log(w)

//     if (x === w) {
//         console.log("this is a palindrum")
//     }else{
//         console.log("this is not a palindrum")
//     }
// }

// problem("level")


// class Stack{
//     constructor(){
//         this.storage = {}
//         this.count = 0
//     }

//     push(value){
//         this.storage[this.count] = value;
//         this.count++
//     }

//     show(){
//         return this.storage
//     }

//     log(){
//         let n = this.storage;
//         let w = [];

//         for (const k in n) {
//             w.push(n[k])
//         }
//         return w
//     }

// }

// const newStack = new Stack()

// newStack.push(20)
// newStack.push(50)


// console.log(newStack.show())
// console.log(newStack.log())   



