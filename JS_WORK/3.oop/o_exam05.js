class IdolModel {
  // 생성자 (public)
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요, ${this.name} 입니다.`;
  }
}

class FemaleModel  extends IdolModel { 
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }

  sayHello() {
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}

const yuJin = new FemaleModel('안유진', 2003, '보컬');
console.log(yuJin);
console.log(yuJin.dance());

console.log(yuJin instanceof FemaleModel); // true
console.log(yuJin instanceof IdolModel); // true

console.log(yuJin.sayHello());