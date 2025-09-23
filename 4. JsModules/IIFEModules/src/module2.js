const module2 = ((dependencyModule) => {
    return {
        sumWithLogs: (a, b) => {
            console.log(`INFO: arg1: ${a} arg2: ${b}`);

            return dependencyModule.sum(a, b);
        }
    }
})(module1);
