//함수를 호출할 때 함수의 파라미터 개수가 일치하지 않아도 오류X
function add(a, b, c) {
  console.log(a, b, c);
}

add(10,20,30,40);

function sumAll() {  // 자바스크립트에서는 arguments를 사용(베열과 같지는 않지만 배열처럼 사용)
  let sum  = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

//함수 파라미터에 기본값 설정
function calculator(total, tax=0.1, tip=0.2) {
  return total + (total * tax) + (total * tip);
}

console.log(calculator(100, 0.1, 0.1));
console.log(calculator(100));

// 화살표 함수 (함수형 프로그래밍)
var greeting = function(name) {
  return 'Hello,'+ name;
}

console.log(greeting('홍길동'));

var greeting2 = (name) => {
  return `Hello, ${name}`;
}

var greeting2 = (name) => `Hello, ${name}`;


console.log(greeting2('박길동'));

function multiply(x) {
  return function(y) {
    return function(z) {
      return `x:${x} y:${y} z:${z}`;
  }
}
}
console.log(multiply(2)(3)(4));

const multiply2 = x => y => z => `x:${x} y:${y} z:${z}`;

console.log(multiply2(6)(7)(8));




//1. 정수 n이 매개변수로 주어질 떄 n의 각 자리 숫자의 합을 return 하도록
//solution 함수를 완성해주세요.
//ex) console.log(solution(930211));
let solution = number =>{
  var sum = 0;
  while (number > 0) {
    var div = number % 10;
    sum += div;
    number = parseInt(number / 10);
  }
  return sum;
}
console.log(solution(930211));


//2. 문자열 my_string이 매개변수로 주어질 떄,
/*
my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를
return하도록 solution 함수를 완성해 주세요.
힌트) isNaN() // 숫자로 치환되면 false 반환 / 아니면 true 반환
isNaN() - 매개변수가 숫자인지 검사하는 함수입니다.(NaN은 Not a Number입니다.)
ex) console.log(solution("p2o4i8gi2"));
*/
let solution1 = my_string =>{
  var arr = [];
  for (const word of my_string) {
    if(isNaN(word) == false){
      arr.push(word);
    }
    // console.log(`word ${word}`);
  }
  arr.sort((a,b) => a-b)
  //a-b : 오름차순 / b-a : 내림차순
  // console.log(arr);
  return arr;
}
console.log(solution1("p2o4i8gi2"));
/**
 * 3.년도 인자만 받을 경우 -> '1234년'과 같은 문자열을 리턴
 * 년도, 월 인자를 받을 경우 -> '1234년 5월'과 같은 문자열 리턴
 * 년도, 월, 일 인자를 전부 받을 경우 -> '1234/5/6'과 같은 형식의 문자열 리턴
 * ex) console.log(meetAt(2024,7,11));
 */
function meetAt(y,m,d) {
  if(y != undefined && m == undefined && d == undefined){
    return `${y}년`
  }else if(y != undefined && m != undefined && d == undefined){
    return `${y}년 ${m}월`
  }else if(y != undefined && m != undefined && d != undefined)
    return `${y}/${m}/${d}`
}
console.log(meetAt(2024,7,11));
console.log(meetAt(2024,7));
console.log(meetAt(2024));