const sum = require('./arrow-function').sum;
const Application = require('./classes').Application;

console.log(sum(1, 2));

const application = new Application('my-app')

application.setProperty('heapSize', 4096);
application.setProperty('restartOnFail', true);

console.log(application.getProperty('heapSize'));
console.log(application.getProperty('restartOnFail'));
console.log(application.getProperty('processId'));
