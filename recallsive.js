let code = [0,1,2,3,4,5,6,7,8,9,10]



//Recallsive

const reverse = (n)=>{
        
    for(i = n ; i >= 0; i--){
        // console.log(i)
    }
}

reverse(10)

const reCall = (n)=>{
    if (n === 0) {
        return n;
    }else{
        console.log(n)
        return reCall(n - 1)
    }
}

// console.log(reCall(10));


const Fibonacci = (n)=>{
    if (n < 2) {
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

// console.log(Fibonacci(10))

const memoFib=(index, array)=>{
    array = array || []

    if (array[index]) {
        array[index]        
    }else{
        if (index < 2) {
            return 1
        }else{
            array[index] = memoFib(index - 1, array) + memoFib(index - 2, array)
        }
    }

    return array[index]
}
// console.log("memofib: ", memoFib(1000))


const harmless = (testNote, speechNote)=>{
    let dataset = speechNote.toLowerCase().trim().split(" ")
    let testData = testNote.toLowerCase().trim().split(" ")

    let dataObj = {}

    dataset.forEach(word => {
        if (!dataObj[word]) {
            dataObj[word] = 0;
        }
        dataObj[word]++
    });

    let checkSpeech = true
    testData.forEach(word =>{
        if(dataObj[word]){
            dataObj[word]--
        }else{
            if (dataObj[word] < 0) {
                checkSpeech = false
            }
            checkSpeech = false
        }
    })

    return checkSpeech
}

// console.log(harmless("give the boy love ", "This is a boy and the Boy love to play so give the boy a break"))


function harmlessRansom(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');

	var magazineObj = {};

	magazineArr.forEach(word => {
		if(!magazineObj[word]){
            magazineObj[word] = 0
        };
		magazineObj[word]++;
	});
    // console.log(magazineObj)
  var noteIsPossible = true;
	noteArr.forEach(word => {
		if(magazineObj[word]){
			magazineObj[word]--;
			if(magazineObj[word] < 0){
				noteIsPossible=false;
            }
		}
		else{
            noteIsPossible = false;
        }
	});
return noteIsPossible;
}

var result = harmlessRansom('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
// console.log(result);

