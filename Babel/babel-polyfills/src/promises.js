export const somePromise = (value, timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(value);
            },
            timeout
        );
    })
}
