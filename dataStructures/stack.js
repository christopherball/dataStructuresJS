class Stack {
    constructor() {
        this.dataContainer = [];
    }

    push(value) {
        this.dataContainer.push(value);
    }

    pop() {
        return this.dataContainer.pop();
    }

    clear() {
        let remainingData = this.dataContainer.reverse();
        this.dataContainer = [];
        return remainingData;
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return this.dataContainer.length;
    }
}

module.exports = {
    Stack: Stack
}