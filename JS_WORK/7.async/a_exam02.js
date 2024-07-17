/**
 * Promise
 */

/*
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, 2000);
});

timeoutPromise.then((res) => {  // then - 그러므로
  console.log('--- then ---');
  console.log(res); // 2초 뒤에 결과 출력
})
*/

/*
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

getPromise(3).then ((res) => {
  console.log('--- then ---');
  console.log(res);

  return getPromise(3);  // 3초 뒤에
}).then ((res) => {
  console.log('--- then ---');
  console.log(res);
})
*/

/*
// 동시 실행 시키기
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

Promise.all ([
  getPromise(1),
  getPromise(4),
  getPromise(1)
]).then ((res) => {
  console.log(res);
})
*/

/* reject (에러 처리1)*/
/*
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('에러');
  }, seconds * 1000);
});

getPromise(3)
  .then((res) => {
    console.log(res); 
  })
  .catch((res) => {
    console.log("--- catch ---");
    console.log(res); 
  })
  .finally(() => {
    console.log("--- finally ---");
  });
*/

/*
//과제> 빌린 돈에 대한 원금 +이자(10%)에 대한 상환금액을 비동기식으로 구현하시오.

const borrow = 20;

// - 선언부
const payWith10Perc = new Promise((resolve, reject) => {
  resolve(borrow + (borrow * 1.1));  // 필요한 값
})

// -실행부
payWith10Perc
  .then(result => {
    console.log(result + '만원');
  })

console.log('완료');
*/

