

function hashTable(size){
    this.bucket = Array(size)
    this.bucketLength = this.bucket.length
}

function hashNode(key, value, next){
    this.key = key
    this.value = value
    this.next = next
}

hashTable.prototype.hashing = function(key){
    let position = null

    for(i = 0; i < key.length; i++){
        position  += key.charCodeAt(i)
    }

    let output = position % this.bucketLength
    return output
}

hashTable.prototype.insert = function(key, value){
    let index = new this.hashing(key)
    if (!this.bucket[index]) {
       return this.bucket[index] = new hashNode(key, value)
    }else{
        let currentIndex = this.bucket[index]

        while (currentIndex.next) {
            currentIndex = currentIndex.next
        }

        currentIndex.next = new hashNode(key, value)
    }
}

const myHashTable = new hashTable(30)

console.log(myHashTable.hashing('David'))
console.log(myHashTable.insert('David', "09162822742"))


// let a = "p"

// console.log(a.charCodeAt())


