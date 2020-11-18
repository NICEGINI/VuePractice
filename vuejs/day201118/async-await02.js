/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * await 사용 방법
 * await 키워드 뒤에는 Promise 객체가 와야한다
 * await 키워드를 사용하기 위해서는  async함수와 함께 해야한다!
 *
 */

function axios(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('결과 처리 성공');
        }, 2000);
    });
}

console.log('1');
axios('http://localhost:9999/board').then((result) => {
    console.log(result);
});
console.log('2');

let result = await axios('http://localhost:9999/board');
console.log('await 동기처럼 실행한다... 근데 에러가 발생한다!!?');
