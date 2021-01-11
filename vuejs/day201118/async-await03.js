/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * await 사용 방법
 * await 키워드 뒤에는 Promise 객체가 와야한다
 * await 키워드를 사용하기 위해서는  async함수와 함께 해야한다!
 * await는 성공한 경우에만 받을 수 있다.
 * reject인 경우에는 에러 처리기능이 없기 때문에 에러가 발생한다.
 * 그래서 따로 예외처리를 해주어야 한다.
 */

function axios(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('결과 처리 성공');
    }, 2000);
  });
}

async function callAxios() {
  console.log('1');
  axios('http://localhost:9999/board').then((result) => {
    console.log(result);
  });
  console.log('2');

  // 아래 await 키워드부터 axios 끝날때까지 멈춤.
  try {
    console.log(1);
    let result = await axios('http://localhost:9999/board');
    console.log('processing axios start');
    console.log('await: ', result);
    console.log('processing axios end');
    console.log(2);
  } catch {
    console.log('reject인 경우!');
  }
}

console.log('callAxios before');
callAxios();
console.log('callAxios after');
