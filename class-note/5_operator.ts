function logMessage(value: any){
    console.log(value);
}
logMessage('hello');
logMessage(100);

var sehos: string | number | boolean;

sehos= 8;
function logMessages(value: string|number){
    if(typeof value === 'number'){
        console.log(value);
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        console.log(value);
        value.toLocaleString();
    }
    throw new TypeError('value must be string or number');
}

logMessages('hello');
logMessages(100);


interface Developer2{

    name: string;
    skill: string;
}

interface Persons{
    name: string;
    age:number;

}

function askSomeone(someone: Developer2 | Persons){
    // someone.name;
    // someone.age;
}

function askSomeone2(someone: Developer2 & Persons){
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone({ name: '디벨로퍼', skill:' 웹 개발'});
askSomeone({ name: '캡틴', age:100});
askSomeone2({ name: '캡틴', skill: '웹 개발',age:100});

var sehod: number| number | boolean;
var capts : number & number & boolean;
