class Queue {
    constructor() {
        this.dataContainer = [];
    }

    queue(value) {
        this.dataContainer.unshift(value);
    }

    dequeue() {
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
    Queue: Queue
}