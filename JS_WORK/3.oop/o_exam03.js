/**
 * Prototype
 */

// __proto__ 모든 객체에 존재하는 프로퍼티
const testObj = {};
console.log(testObj.__proto__);  // Object.prototype


// 생성자 함수로 prototype 설정 (this여부)
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

// console.log(IdolModel.prototype);
// // prototype 안에 있는 내용을 보여줌.
// console.dir(IdolModel.prototype, {
//   showHidden: true
// });

console.log(IdolModel.prototype.constructor  === IdolModel);
console.log(IdolModel.prototype.constructor.prototype  === IdolModel.prototype);


// => IdolModel에서 생성자 함수를 통해서 안의 프로토타입이라는 걸 통해 자신의 프로토 타입 참조 가능 
//=> constructor를 통해 생성자 함수와 같은지 확인할 수 있다.

const yuJin = new IdolModel('안유진', 2003);  // 유진.prototype -> IdolModel.prototype => prototye -> Object.prototype

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === Object.prototype);

console.log('=============');

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(wonYoung2.sayHello() === yuJin2.sayHello());
console.log(yuJin2.hasOwnProperty('sayHello'));  // 나에게만 있는지(true) 프로토타입에서 같이 사용하는 함수인지(false) 확인

console.log('=============');

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello() === wonYoung3.sayHello());
console.log(yuJin3.hasOwnProperty('sayHello'));


// 프로토 타입을 이용
// 1. 생성자 함수를 만든다.
// 2. 중복되는 로직을 prototype으로 만든다.
// 3. 객체를 생성한다.
// 4. 함수를 호출한다.
function Student(name, kor, eng, mat) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;
}

// 1번 방식
// Student.prototype.getSum = function() {
//   return this.kor + this.eng + this.mat;
// }
// Student.prototype.getAverage = function() {
//   return this.getSum() / 3;
// }
// Student.prototype.toString = function() {
//   return  this.name + "\t" + this.getSum() + "\t" + this.getAverage();
// }

// 2번 방식
Student.prototype = {
  getSum : function() {
    return this.kor + this.eng + this.mat;
  },
  getAverage : function() {
    return this.getSum() / 3;
  },
  toString : function() {
    return  this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  }
}

const Student1 = new Student('홍길동', 80, 70 , 90);  // Student객체에 배열을 넣은 것과 같음.
const Student2 =  new Student('박길동', 30, 40 , 60);  // Student객체에 배열을 넣은 것과 같음.

console.log(Student1.toString());
console.log(Student2.toString());

console.log(Student1.hasOwnProperty('toString'));