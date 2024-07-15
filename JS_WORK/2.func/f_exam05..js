let replyService = (function() {

  function create() {
    console.log(`create`);
  }

  function update() {
    console.log(`update`);
  }

  function getlist(param, callback) {
    let data = `결과값: ${param}`;
    callback(data);
  }

  return {  // 객체를 리턴
    create : create,
    update : update,
    getlist : getlist
  }

})();

function show() {
  // replyService.create();
  replyService.getlist('kosa', function(result) {
    console.log("내가 원하는 형태의 출력: " + result);
  });
}

show ();

console.log('================================');

function orderService(item, price, quantity, callback) {
  console.log(`커피 주문`);
  //주문 관리 서비스 구현
  let totalPrice = price * quantity;
  callback(totalPrice);
}

function order() {
  orderService('아메리카노', 4500, 1, function(result) {
    console.log(`주문 가격 : ${result}`);
  });

}

order();

console.log('================================');
