/**
 *
 */

new Promise((resolve, reject) => {
    console.log('callback 실행');
    setTimeout(() => {
        /*
        console.log('결과성공');
        resolve();
        */
        console.log('결과실패');
        reject();
    }, 2000);
});
