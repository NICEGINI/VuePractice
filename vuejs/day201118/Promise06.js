/**
 * resolve, reject에서 데이터 보내기
 */

const promise = new Promise((resolve, reject) => {
    console.log('callback 실행 start');
    setTimeout(() => {
        resolve({ msg: 'success', data: [1, 2, 3, 4, 5] }); // then 호출
    }, 2000);
    console.log('callback 실행 end');
});

// then(callback function)
// catch(callback function)
promise
    .then((result) => {
        console.log('결과 성공');
        console.log(result);
        console.log(result.msg);
        console.log(result.data);
    })
    .catch(() => {
        console.log('결과 실패');
    })
    .finally(() => {
        console.log('마지막에 항상 실행!');
    });
