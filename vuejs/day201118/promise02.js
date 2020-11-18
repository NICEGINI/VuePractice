/**
 * 형식: new Promise(Executor)
 * Executor : 콜백함수
 *
 * 객체가 생성되면
 * 대기(Pending): 이행하거나 거부되지 않은 초기 상태.
 */

new Promise(() => {
  console.log('callback 실행');
}); // 대기 상태 (Pending)
