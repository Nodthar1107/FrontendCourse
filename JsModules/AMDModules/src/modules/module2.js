define('module2', ['module1'], (module1) => {
    return {
        sumWithLogs: (a, b) => {
            console.log(`INFO: arg1: ${a} arg2: ${b}`);

            return module1.sum(a, b);
        }
    }
});
