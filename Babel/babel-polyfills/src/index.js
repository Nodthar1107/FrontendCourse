import { somePromise } from './promises.js';

const array = [1, 2, 3];
console.log(array);
console.log("Includes 1", array.includes(1));

somePromise({ status: 200, applicationIds: [1, 2, 3] }, 2000)
    .then((value) => {
        console.log('Resolved value', value);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finally section');
    });
