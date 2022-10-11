const cipherBuild = (str, numb)=>{
    let myString = str.toLowerCase()
    let myLetters = "abcdefghijklmnopqrstuvwsyz".split("")
    let result = "";

    for (let i = 0; i < myString.length; i++) {
        const index = myString[i];

        let newIndex = myLetters.indexOf(index)
        let currentIndex = newIndex + numb

        result += myLetters[currentIndex]
        if(str[i] === str[i].toUpperCase()){
            result += myLetters[currentIndex].toUpperCase()
        }else{
            result += myLetters[currentIndex]
        }
    }
    return result
}

console.log(cipherBuild("David", 2))


