/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * async는 항상 Promise 객체를 반환한다.
 * await가 없다면 항상 동기적 실행만을 한다.
 *
 */

async function func01() {
    return 1;
}

console.log('func01 call');
console.log(func01());

// asnyc 키워드를 사용하지 않으면 아래와 같은 모양
function func02() {
    return new Promise((resolve) => {
        resolve(1);
    });
}

console.log('func02 call');
console.log(func02());
