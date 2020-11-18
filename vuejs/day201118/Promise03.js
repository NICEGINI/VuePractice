/**
 * 형식: new Promise(Executor)
 * Executor : 콜백함수
 * Executor 형식
 * function(resolve, reject){
 *      // resolve, reject 둘 다 함수
 *      // resolve : 이행(fulfilled): 연산이 성공적으로 완료됨.
 *      // reject : 거부(rejected): 연산이 실패함.
 * }
 * 객체가 생성되면
 * 대기(Pending): 이행하거나 거부되지 않은 초기 상태.
 */

new Promise((resolve, reject) => {
  console.log('callback 실행');
  /*
  // ajax와 함께 이런식으로 사용
 $.ajax({
     url: 'aaa',
     success: () => {
         resolve();
        },
        error: () => {
            reject();
        },
    });
  */
  resolve(); // 이행 상태 (fulfilled)
  //reject(); // 거부 상태 (rejected)
}); // 대기 상태 (Pending)

/* 
function Promise(callback) {
    function success() {}
    function fail() {}
    callback(success, fail);
}
*/
