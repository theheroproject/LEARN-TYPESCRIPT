enum Shoes {
    Nike,
    Adidas,
    Sth,
}

enum Shoess {
    Nike = '나이키',
    Adidas = '아디다스'
}


var myShoes = Shoes.Nike;
var myShoess = Shoes.Nike;
console.log(myShoes); //
console.log(myShoess); //


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}

// 예제
function askQuestion(answer: string){
    if(answer === 'yes'){
        console.log('정답입니다');
    }
    if(answer === 'no'){
        console.log('오답입니다.')
    }
}

// 예제
function askQuestion2(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다');
    }
   if(answer === Answer.No){
        console.log('오답입니다.')
    }
}
askQuestion2(Answer.Yes);
askQuestion2(Answer.No);

askQuestion('예스');
askQuestion('y');
askQuestion('Yes');