/**
 * resolve 함수 호출 시 then 실행
 * reject 함수 호출 시 catch 실행
 */

const promise = new Promise((resolve, reject) => {
    console.log('callback 실행 start');
    setTimeout(() => {
        // resolve(); // 내부적으로 then 호출
        reject(); // 내부적으로 catch 호출
    }, 2000);
    console.log('callback 실행 end');
});

// then(callback function)
// catch(callback function)
promise
    .then(() => {
        console.log('결과 성공');
    })
    .catch(() => {
        console.log('결과 실패');
    });
