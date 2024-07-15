/**
 * 함수 클로저
 * => 함수 호출 이후에도 함수의 실행컨텍스트 영역을 유지
 */

function outerFunc() {
  let x = 10;
  var innerFunc = function() {
    console.log(x);
  }

  return innerFunc;
}

let inner = outerFunc();
inner();  // 10

//데이터 캐싱
function cashFunction(newNum) {
  // 아주 오랜 시간이 소요되는 작업
  var number = 10 * 10;

  return number * newNum;
}

console.log(cashFunction(10));
console.log(cashFunction(20));

console.log('================================');

function cashFunction2() {
  //아주 오랜 시간이 소요되는 작업
  var number = 10 * 10;

  function innnerCashFunction(newNum) {
    return number * newNum;
  }

  return innnerCashFunction;
}

const runner = cashFunction2();
console.log(runner(30));
console.log(runner(40));

console.log('================================');

// 내 방식 closer
function outer(arg1, arg2) {
  let a = arg1;
  let b = arg2;

  function innerouter() {
    console.log(a + b);
  }

  return innerouter;
}

let func = outer(16, 14);

console.log(func()); 

// 교수님 방식
function outer(arg1, arg2) {
  function inner(innerArg) {
    console.log(arg1 + arg2 / innerArg);
  }

  return inner;
}


//let inner2 = outer(16, 14);
//inner2(10);

outer(16, 14)(10);