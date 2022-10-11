const harmleRansome = (note, margazine)=>{
    let noteArr = note.toLowerCase().split(' ')
    let margazineArr = margazine.toLowerCase().split(' ')

    let margazineObj={}

    margazineArr.forEach(word => {
        if (!margazineObj[word]) {
            margazineObj[word] = 0
        }
        margazineObj[word]++
    });
    console.log(margazineObj)

    let result = true
    noteArr.forEach(word =>{
        if(margazineObj[word]){
            margazineObj[word]--
            if (margazineObj[word] < 0) {
                result = false
            }
        }else{
            result = false
        }
    })

    return result
}

console.log(harmleRansome('this is is the they the lord as made', 'this is the they the lord as made'))