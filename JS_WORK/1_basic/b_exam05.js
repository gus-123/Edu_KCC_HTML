//예외처리
//try ~ catch
//throw
//finally

function runner() {
  try {
    console.log('heelo')
    console.log('문제 발생');
  } catch (e) {
    console.error('error catch');
  } finally {
    console.log('Done');
  }
}