const module1 = (() => {
    return {
        foo: () => {
            console.log(10 + 5)
        },
        sum: (a, b) => {
            return a + b;
        }
    }
})();
