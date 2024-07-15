/**
 * 생성자 함수
 * => 다수의 객체를 생성하기 위해서 사용한다.
 */

function Student(name, kor, eng, mat) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;

  this.getSum = function() {
    return this.kor + this.eng + this.mat;
  }
  this.getAverage = function() {
    return this.getSum() / 3;
  }
  this.toString = function() {
    return  this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  }
  //this.toString = () => this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  
  // this.toString = () => `${this.name}, ${this.getSum()}, ${this.getAverage()}`;

}

let Students = [];

Students.push(new Student('홍길동', 80, 70 , 90));  // Student객체에 배열을 넣은 것과 같음.
Students.push(new Student('박길동', 30, 40 , 60));  // Student객체에 배열을 넣은 것과 같음.

for(let i in Students) {
  console.log(Students[i].toString());
}

//퀴즈> Rectangle 생성자 함수를 만들고 사각형 넓이를 구하여 보자.
// (width, height, getArea() 메서드를 구현하시오.)

// 1. 함수 이름 짓고, 매개변수 받을꺼
// 2. this.변수 = 매개변수
// 3. return this할 함수 생성
// 4. 값을 받을 빈 배열 생성
// 5. for(let i in arr) { console.log(arr[i]); }

//교수님 방식
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function() {
    return this.width * this.height;
  }
}

let obj = new Rectangle(5, 10);

console.log(obj.getArea()); 


// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.getArea = function() {
//     return this.width * this.height;
//   }
//   this.toString = function() {
//     return "width : " + this.width + ", height : " + this.height + ", area : " + this.getArea();
//   }
// }

// let Rectangles = [];

// Rectangles.push(new Rectangle(5, 10));
// Rectangles.push(new Rectangle(8, 12));

// for(let i in Rectangles) {
//   console.log(Rectangles[i].toString());
// }