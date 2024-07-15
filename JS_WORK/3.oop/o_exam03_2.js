/**
 * 인스턴스 __proto__ 변경
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function() {
  return `${this.name}이(가) 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function() {
    return `${this.name}`;
  }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());

// console.log(ray.sayHello());  //prototype에 없기때문에 에러

Object.setPrototypeOf(ray, IdolModel.prototype);  //prototype 변경하는 방법
console.log(ray.sayHello());  // 변경해서 이제는 IdolModel.prototype의 sayHello() 호출

console.log(ray.constructor === IdolModel);  //TRUE
console.log(gaEul.constructor === IdolModel);  //TRUE

console.log(FemaleIdolModel.prototype === IdolModel.prototype);  //false


/**
 * 함수의 prototype 변경
 */

FemaleIdolModel.prototype = IdolModel.prototype;  // FemaleIdolModel.prototype을 IdolModel.prototype로 변경

const eSeo = new FemaleIdolModel('이서', 2007); 
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

console.log(eSeo.sayHello());