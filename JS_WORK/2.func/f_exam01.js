console.log(add(10, 20));
console.log(add2(100, 200));

// 선언적 함수
function add(a, b) {
  let sum = a + b;
  return sum;
}

// 익명 함수(함수에 이름이 없으므로 변수에 함수를 넣어서 사용할수 있음)
let add2 = function(a, b) {
  let sum = a + b;
  return sum;
};

// console.log(add(10, 20));
// console.log(add2(100, 200));

// add2 vs add2()
let plus = add2; //=> 함수의 메모리 주소 값을 가짐  //함수 : 주소값 할당 => plus도 함수
let plus2 = add2(20, 30);  //=> 함수 자체를 호출하여 return값을 받아 plus2에 저장  // 함수를 호출 => 리턴값을 전달

console.log(plus(50, 100));
console.log(plus2);
console.log('==============');

// 함수의 파리미터에 함수를 전달할 수 있다. (콜백함수)
let foo = function(func) {  //func => (콜백함수)
  if(typeof func === 'function') {
    func();
  }
}

foo(function() {
  console.log('파라미터에 함수를 전달하는 예제');
});

//함수가 함수를 return할 수 있다.
//함수를 리턴하는 예제와 함께 리턴된 함수를 호출하는 예제

let ex1 = function() {
  return function() {
    console.log('함수가 함수를 리턴하는 예제');
  }
}

let ex2 = ex1();

console.log(ex2());

//함수의 파라미터에(plus or minus) 호출
//plus => plus기능을 하는 함수를 리턴
//minus => minus 기능을 하는 함수를 리턴
//리턴 받은 해당 함수를 호출해서 사용해 보자.

function call(mode) {
  let obj = {
    plus: function(left, right) {
      return left + right;
    },
    minus: function(left, right) {
      return left - right;
    }
  }
  return obj[mode];
}

let func2 = call('minus');
console.log(func2(50, 30));

// function plus(a, b) {
//   return a + b;
// }

// let minus = function(a, b) {
//   return a - b;
// }

// let calculator = function(a, b, func) {
//   if(typeof func == 'plus') {
//     plus(a,b);
//   }
//   else {
//     minus(a,b);
//   }
// }

// let result = calculator(10,5,plus);

// console.log(result);

//콜백함수(함수의 파라미터에 전달되는 함수)
function sortDesending(a, b) { 
  // if (a>b) {
  //   return -1;
  // }
  // else if (a<b) {
  //   return 1;
  // }
  // else  {
  //   return 0;
  // }
  return b - a; // 내림차순 (처리는 sort가 함)
}

let arr = [94, 2, 45, 231, 33];
console.log(arr.sort(sortDesending));  // sort안에 정렬 기준 함수를 넣어주어야함

//즉시실행함수 : 함수 정의와 동시에 실행
(function(a,b) {
  console.log(a + b);
})(10,5);