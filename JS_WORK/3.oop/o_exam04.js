/** 
 * class 기반의 객체지향 프로그래밍
 */

class IdolModel {
  // 생성자 (public)
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(new IdolModel('안유진', 2003));

class IdolModel2 {
  // 생성자 (private)
  #name;
  #year;

  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set year(year) {
    this.#year = year;
  }

  get year() {
    return this.#year;
  }

  // class에 포함됨 그래서 class 형식으로 호춯해주어야 함.
  static returnGroupName() {
    return '아이브';  // static method
  }
}

let yuJin = new IdolModel2('안유진', 2003);
//console.log(yuJin.name);  // private로 선언하여  undifined

yuJin.name = '장원영';
yuJin.year = '24/07/15';
console.log(yuJin.name +' ' + yuJin.year);  
console.log(IdolModel2.returnGroupName());

/**
 * factory constructor pattern
 */

class IdolModel3 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) { // '파라미터.변수명' 형식
    return new IdolModel3(object.name, object.year);
  }

  static fromList(list) { // 배열 형식으로 받아 idolModel3 인스턴스로 생성
    return new IdolModel3(list[0], list[1]);
  }
}

// 객체 추가
const yuJin2 = IdolModel3.fromObject({ name: '안유진', year: 2003})

console.log(yuJin2);

// 배열 추가

const wonYoung = IdolModel3.fromList(['장원영', '2004']);
console.log(wonYoung);