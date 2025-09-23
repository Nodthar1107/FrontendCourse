class Application {
    
    #name;
    #state;
    
    constructor(name, initialState = {}) {
        this.#name = name;
        this.#state = initialState;
    }

    getName() {
        return this.#name;
    }

    getProperty(name) {
        return this.#state[name];
    }

    setProperty(name, value) {
        this.#state[name] = value;
    }
}

exports.Application = Application;
