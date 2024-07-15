/**
 * Q1. Rectangle 생성자 함수를 class 기반으로 수정하기.
 * Q2. 상속을 이용하여 Square(정사각형)을 구현해 보세요. 
 */
//Q. Rectangle 생성자 함수를 만들고 사각형 넓이를 구하기
//(width, height, getArea())

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.getArea = function () {
//       return this.width * this.height;
//   }
//   this.toString = function () {
//     return '넓이는 ' + this.getArea();
//   }
// }

class Rectangle{
  width;
  height;

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  getArea(){
    return this.width * this.height;
  }

  toString(){
    return `넓이는 ${this.getArea()}입니다.`
  }
}

class Square extends Rectangle{

  constructor(length){
    super(length, length);
  }

  toString(){
    return `정사각형의 넓이는 ${super.getArea()}입니다.`
  }
}

const s1 = new Rectangle(4, 5);
console.log(s1.toString()); //넓이는 20입니다.

const sq1 = new Square(9);
console.log(sq1.toString()); //정사각형의 넓이는 81입니다.

let iveMembers = ["유진", "가을", "레이", "원영", "리즈", "이서"];

console.log(iveMembers.map((x) => x)); //[ '유진', '가을', '레이', '원영', '리즈', '이서' ]
console.log(iveMembers.map((x) => `아이브 : ${x}`)); 
/** ['아이브 : 유진', '아이브 : 가을', '아이브 : 레이', 
 * '아이브 : 원영', '아이브 : 리즈', '아이브 : 이서']
 */

console.log(iveMembers.map((x) => {
  if(x === '유진'){
    return `아이브 : ${x}`
  }else{
    return x;
  }
})); //[ '아이브 : 유진', '가을', '레이', '원영', '리즈', '이서' ]

