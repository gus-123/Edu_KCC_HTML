/**
 * 타입변환(형변환)
 * 1)명시적
 * 2) 암묵적
 */

// 명시적
let age = 20;
let stringAge= age.toString();
console.log(typeof stringAge);

//암묵적
let test = age + '';
console.log(typeof test);

console.log('100' + '2');
console.log('100' * '2');
console.log('100' - '2');

//문자열 =>  number : eval(), Number(), 'parseInt()' 쓰길, parseFloat()
let num ='100안녕';
num = parseInt(num);  // num 값을 정수형으로 변환  //parseInt() =>  자기가 변환할수 있는것 까지 변환
let result = num + 100;
console.log(result);

//========================================

/**
 * Hoisting(호이스팅)
 * - 모든 변수 선언문이 코드의 최상단으로 이용되는 것처럼 느껴지는 현상
 */

//원래 이렇게 나오는게 정상적이나
var name;
console.log(name);  // undefined
name = '홍길동';
console.log(name);  // 홍길동

// 호이스팅을 할 경우 이렇게 결과 출력
console.log(kim);
var kim = '김씨';

//=> 변수가 이미 선언된것처럼 되어있기 때문에 undefined로 출력
//=> let, const로 선언한 변수는 호이스팅은 되지만 초기화가 안되어 에러로 막힘