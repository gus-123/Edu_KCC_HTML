//변수 선언, 사용
// var num = 100;
// num = '안녕';
// console.log(num);

// var fun = function() {
//   alert('a');
// }

// 컴파일 언어 : 데이터형, 문법 => 엄격히 요구
//인터프리터 언어 : 문법적으로 느슨한거 요구 (한줄씩 내려가면서 실행, 데이터를 넣기 전까지는 데이터 타입이 없음)

//var : 여러 큰 스코프에서 공유하기 위한 최상위 변수 사용
//let : 작은 스코프에서 로컬변수 사용
//const : 상수값으로 사용

// const a = 10; ??오류
// a = '안녕';
// console.log(a);

//데이터 타입(자료형) => 자료형 알고 싶을 때  typeof
// let intNum = 10;
// let floatNum = 3.14;

// console.log(typeof intNum);
// console.log(typeof floatNum);

// let sinS = 'single';
// let doubleS = "double";

// console.log(typeof sinS);
// console.log(typeof doubleS);

/**
* Template Literal
* 1. newline -> \n
* 2. tab -> \t
* 3. 백슬러시 문자열 안에 표현 -> \\
*/

// const kcc = '김진아\n이수호';
// console.log(kcc);

// const kcc = '김진아\t이수호';
// console.log(kcc);

// const kcc = '김진아\\이수호';
// console.log(kcc);

// const kcc = '김지안 \
// ^^V "A" ';
// console.log(kcc);

// const groupName ='kcc';
// console.log(groupName + '이수호');
// console.log('${groupName} 이한희');

//논리형(boolean)
/*
* false
* =>String : 빈 문자열
* => 값이 없는 경우
* => 0
*/
// let boolVar = true;
// console.log(typeof boolVar);
// console.log(!!false);  //f
// console.log(!!''); //f
// console.log(!!0); //f
// console.log(!!undefined); //f
// console.log(!!null);  //f
// console.log(!!'0'); //t
// console.log(!!{});  //t
// console.log(!![]); //t

//undefined
// let emptyVar;
// console.log(typeof emptyVar);

//null -> object
// let nullVar = null;
// console.log(typeof nullVar);

//함수 (function) -> function
// let fun = function(){};
// console.log(typeof fun);

//객체 (object) -> object
// let person = {
//   name : '홍길동',
//   age : 20
// }

// console.log(typeof person);
// console.log(person.name);
// console.log(person['age']);
// ----------------------------------
//배열 (Array)  -> 대괄호로 배열표기 / object타입
const kccMember = [
  "김현민",
  "윤채원",
  "김연호",
  "원승언"
]

console.log(typeof kccMember);
console.log(kccMember);

/**
 * Symbol 타입
 * - 유일무이한 값을 생성할때 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

// Symbol로 표현하면 서로 유일 무이한 값을 표현
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);