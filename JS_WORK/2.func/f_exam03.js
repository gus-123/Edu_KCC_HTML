//함수의 실행 컨텍스트
//Lexical scope : 선언된 위치가 상위 스코프를 결정한다. => JavaScript
//Dynamic scope : 실행한 위치가 상위 스코프를 결정한다. => Python

let var1 = 10;

function func() {
  let var2 = 20;
  console.log(var1); // 함수안에 내가 원하는 변수가 없더라도 상위 스코프에 원하는 변수명이 있으면 실행이 가능하다.
}

func();

// let value = `value1`;

// function printFunction() {
//   let value = `value2`;

//   function printValue() { 
//     return value; 
//   }
  
//   console.log(printValue());
// }

// printFunction();  //value2

let value = `value1`;

function printValue() { 
  return value; 
}

function printFunction(func) {
  let value = `value2`;
  
  console.log(func());
}

printFunction(printValue);  //value1 - 선언된 위치가 중요!

console.log(`================================`);

var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree); 
}

functionOne();  // 3
functionTwo();  //3

console.log('================================');

//var인 경우 i를 범용해서 혼용해서 사용
// var i = 999;

// for(var i = 0; i <10; i++) {
//   console.log(i);
// }

// console.log(i);
//let인 경우 범위 혼용이 없음
let i = 999;

for(let i = 0; i <10; i++) {
  console.log(i);
}

console.log(i);


console.log('================================');

// var여도 오직 함수일때는 외부와 내부의 실행 컨텍스트를 분리하여 사용함. 즉 let과 같음.
var var3 = 100;

function func3 () {
  var var3 = 200;
  console.log(var3);
}

func3();
console.log(var3);
console.dir(func3);  // [Function: func3]


/**
 *  1. var 키워드는 함수 레벨 스코프만 만든다.
 *  2. let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만든다.
 */
