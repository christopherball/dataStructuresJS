class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushHead(value) {
        if (!this.head && !this.tail)
            this.head = this.tail = new Node(value);
        else {
            let tempNode = new Node(value);
            tempNode.child = this.head;
            this.head = tempNode;
        }
    }

    pushTail(value) {
        if (!this.head && !this.tail)
            this.head = this.tail = new Node(value);
        else {
            this.tail.child = new Node(value);
            this.tail.parent = this.tail;
            this.tail = this.tail.child;
        }
    }

    popHead() {
        if (this.head) {
            let resultNode = this.head;
            this.head = this.head.child;
            return resultNode;
        }

        return null;
    }

    popTail() {
        if (this.tail) {
            let resultNode = this.tail;
            this.tail.parent.child = null;
            return resultNode;
        }

        return null;
    }
}

class Node {
    constructor(value) {
        this.data = value;
        this.child = null;
        this.parent = null;
    }
}

module.exports = {
    DoublyLinkedList: DoublyLinkedList,
    Node: Node
}