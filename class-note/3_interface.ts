interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}|


// 함수에 인터페이스 활용

function getUser(user: User){
    console.log(user);
}

const capt = {
    age: 33,
    name: '캡틴'
}
getUser(cpat);

function cpat(cpat: any) {
    throw new Error("Function not implemented.");
}
function getUser(cpat: (cpat: any) => void) {
    throw new Error("Function not implemented.");
}

// 함수에 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b:number): number;
}

// function sum(a,b){
//     return a+b
// }

var sum: SumFunction;
sum = function(a: number, b:number): number{
    return a+b ;
}

// 인덱싱
interface StringArray{
    [index: number]:string;
}

var arr: StringArray = ['a','b','c'];
//arr[0]; // 'a'
//arr[0] = 10; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
//obj['css'] = 'a'

Object.keys(obj).forEach(function(value){

});

interface Test {
    name: string;
    age: number;
}

interface Developer extends Test{
    language: string;



}

var captain: Developer =  {
    language: 'ts',
    age: 100,
    name: '캡틴'
}