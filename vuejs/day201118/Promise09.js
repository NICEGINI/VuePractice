function axios(url, options) {
    return new Promise((resolve, reject) => {
        console.log('callback 실행 start');
        console.log(`${url} 호출하여 데이터 저장하기`);
        setTimeout(() => {
            resolve({ msg: 'success', data: [1, 2, 3, 4, 5] }); // then 호출
            // reject // catch 호출
        }, 2000);
        console.log('callback 실행 end');
    });
}

// 콜백헬 해결.
axios('1번 작업 호출', { method: 'POST' })
    .then((result) => {
        console.log('1번 작업 결과 성공');
        return axios('2번 작업 호출', { method: 'POST' });
    })
    .then((result) => {
        console.log('2번 작업 결과 성공');
        return axios('3번 작업 호출', { method: 'POST' });
    })
    .then((result) => {
        console.log('3번 작업 결과 성공');
        return axios('4번 작업 호출', { method: 'POST' });
    })
    .then((result) => {
        console.log('4번 작업 결과 성공');
    })
    .catch(() => {
        console.log('결과 실패');
    })
    .finally(() => {
        console.log('마지막에 항상 실행!');
    });
