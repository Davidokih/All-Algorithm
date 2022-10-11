// const stackMethod = (n)=>{
//     const stack = []
// const value = n
// let reView = ""

// for (let i = 0; i < value.length; i++) {
//     stack.push(value[i])
// }

// console.log(stack)


// for (let i = 0; i < value.length; i++) {
//     reView += stack.pop()
// }

// console.log(reView)
// }

// stackMethod("12345678")

class Stack{
    constructor(){
        this.storage = {}
        this.count = 0
    }

    add(value){
        this.storage[this.count] = value
        this.count++
    }

    print(){
        return this.storage
    }

    array(){
        let  data = this.storage
        let loggie = []

        for (const k in data) {
           loggie.push(data[k])
        }
        return loggie
    }

    size(){
        return this.count
    }

    peek(){
        return this.storage[this.count - 1]
    }

    remove(){
        if (this.count === 0) {
            return
        }
        this.count--

        return this.storage[this.count]
    }
}

// const stack = new Stack()

// stack.add("David")
// stack.add("Precious")
// stack.add("Lucia")
// stack.add("Idris")
// stack.add("Victor")
// stack.re()


// console.log(stack.print())
// console.log(stack.array())
// console.log(stack.size())
// console.log(stack.peek())

// const Queue = (n)=>{
//     let name = []
// let newName = n.toLowerCase()
// let checkName = ""

// for (let i = 0; i < newName.length; i++) {
//     name.push(newName[i])
// }

// console.log(name)

// for (let i = 0; i < newName.length; i++) {
//     checkName += name.shift()
// }

// console.log(checkName)
// }

// Queue("David")

class Queue{
    constructor(){
        this.storage = []
        this.count = 0
    }

    push(value){
        this.storage[this.count]= value
        this.count++
    }

    size(){
        return this.storage
    }

    shift(){
        return this.storage[this.count = 0]
    }
}

const queue = new Queue

queue.push('David')
queue.push('Precious')
queue.push('Lucia')
queue.push('Dickson')
queue.push('Idris')


console.log(queue.size())
console.log(queue.shift())






