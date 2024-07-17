/**
 * 비동기식 (Async)
 */

/*
function longWork() {
  const now = new Date;
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 * 1000;

  while(new Date().getTime() < afterTwoSeconds) {
    
  }

  console.log('완료');

}

//동기식 프로그램
console.log('Hello');
longWork();
console.log('world');
*/

/*
function longWork(){
  setTimeout(() => {
    console.log('완료')
  }, 2000)
}

// 비동기식 프로그램
console.log('Hello');
longWork();
console.log('world');
*/


// 비동기식 안에서 순차적으로 실행 하는 프로그램(1)
function waitAndRun(){
  setTimeout(() => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
      }, 2000)
    }, 2000)
  }, 2000)
}

waitAndRun();