/**
 * 
 * Async
 */

/*하나만
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

async function runnner() {
  const result = await getPromise(1);
  console.log(result);
}

runnner();
console.log('실행 끝');
*/

/*
// 비동기식 안에서 순차적으로 실행 하는 프로그램(2) - 즉, async와 await가 있으면 비동기식을 동기식으로 동작하는것처럼 보이게 함
const getPromise = (seconds) => new Promise((resolve, reject) => {  // Promise객체로 구현한것만 await를 붙일수 있음.
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

async function runner() {
  const result1 = await getPromise(1);
  console.log(result1);
  const result2 = await getPromise(2);
  console.log(result2);
  const result3 = await getPromise(1);
  console.log(result3);
}

runner();
console.log('실행 끝')
*/

//에러 처리2
function moneyLend(borrow) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.1) {
        reject("채무자 파산");  // 문제 있을 시
      }
      resolve(borrow * 1.1);  // 정상일 시
    }, 1000)
  })
}

async function lend() {  // 비동기 안에서 순차적으로 하고 싶어서 await를 사용하는 것
  try{
    const lend1 = await moneyLend(10);
    const lend2 = await moneyLend(lend1);
    const lend3 = await moneyLend(lend2);
    const lend4 = await moneyLend(lend3);
    const lend5 = await moneyLend(lend4);

    console.log("대출금액: " + lend5 + '만원');
  }catch(msg) {
    console.log(msg);  // reject 일시
  }finally {
    console.log('대금 종료');
  }
}

lend();
console.log('done');
