/**
 *  자바스크립트 객체
 *  1) 사용자 정의 객체
 *    1. Object 2. 객체 리터럴 3. 생성자 함수(프로토타입)
 *  2) 내장 객체 (빌트인 객체) ex. API
 *    1. 코아객체 :  string, Number, Boolean, Symbol, Math, Date, RegExp, Error, Array, Function
 *    2. 브라우저객체 : Window, Document, history, navigator
 *    3. DOM 객체 (Document Object Model) : 문서내 모든 요소 : div, form, p
 */

// 1) 사용자 정의 객체
// 1. Object 객체 이용
// - 자바스크립트 객체는 동적으로 프로퍼티를 추가/삭제할 수 있다.

let obj = new Object();
console.log(obj);

obj.name = '홍길동';
obj.age = 20;

console.log(`이름 : ${obj.name}`);
console.log(`나이 : ${obj.age}`);

//함수는 1급 객체이다.
function add(a,b) {
  let sum = a+b;
  return sum;
}

console.log(typeof add);
console.log(add instanceof Object);

add.result = add(10, 20);
console.log(`결과 : ${add.result}` );

//2. 리터럴 형식으로 객체 사용 => 1개의 객체를 생성하여 사용하는 경우
let obj2 = { //객체 안에 함수를 넣을 수 있음
  name: '김길동',
  age: 30,
  display: function() {
    console.log(this.name); //여기서 가르키는 this는 obj2임
    
  }
};
obj2.display();
console.log(`나이 : ${obj2.age}` );
console.log(`나이 : ${obj2['age']}` );

//퀴즈> 리터럴 형식으로 빈객체를 생성 후
// 동적프로퍼티와 함수를 추가 후 호출하는 예제를 구현하시오.

// 나의 방식
let book = {
  title : '모던 자바 Deep Drive',
  author : '이웅모',
  display : function() {
    console.log(this.title);
  }
}

book.display();
console.log(`지은이 : ${book.author}`);

// 교수님 방식
let obj3 = {};
obj3.name ='홍길동';
obj3.age = 40;
obj3.display = function() {
  console.log(this.name);
  console.log(this.age);
}

obj3.display();

//객체 디스트럭처링 : 객체의 프로퍼티를 풀어서 별개의 변수에 저장하는 방식
let person = {
  first : '홍',
  last : '길동'
};

let {first, last} = person;
console.log(first,last);

//const 객체 생성
//1) const로 선언할 경우 객체 자체를 변경할 수 없다.
//2) 객체 안의 프로퍼티나 메서드는 변경이 가능하다.

const obj4 = {
  first1 : '둘',
  last1 : '리'
}

const {first1, last1} = obj4;
console.log(first1, last1);