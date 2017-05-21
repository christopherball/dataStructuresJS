class HashTable {
    constructor() {
        this.dataContainer = {};
    }

    add(key, value) {
        this.dataContainer[key] = value;
    }

    remove(key) {
        if (this.contains(key))
            delete this.dataContainer[key];
    }

    get(key) {
        return this.contains(key) ? this.dataContainer[key] : undefined;
    }

    contains(key) {
        return this.dataContainer.hasOwnProperty(key);
    }

    clear() {
        this.dataContainer = {};
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return Object.keys(this.dataContainer).length;
    }
}

module.exports = {
    HashTable: HashTable
}