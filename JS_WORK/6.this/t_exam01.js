/**
 * 일반함수 안에서 this는 window 객체이다.
 */

var data = 10;  // 전역 (window 객체)  ///=> let data = 10;

function func() {
  this.data = 20;
  data = 30;

  console.log('1. data: ' + data); //30
  console.log('2. this.data: ' + this.data);  //30
  console.log('3. window.data: ' + window.data);  //30
}

func();