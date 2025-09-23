const module1 = require("./modules/module1");
const module2 = require("./modules/module2");

// Импортируемый модуль является функцией
module1("Hello from index.js");

// Импортируемый модуль являеся объектом
console.log(module2.sum(1, 2));
module2.foo();
