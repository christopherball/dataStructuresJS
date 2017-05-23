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
            this.tail.child.parent = this.tail;
            this.tail = this.tail.child;
        }
    }

    popHead() {
        if (this.head) {
            let resultNode = this.head;
            this.head = this.head.child;

            if (this.head)
                this.head.parent = null;

            return resultNode;
        }
        return undefined;
    }

    popTail() {
        if (this.tail) {
            let resultNode = this.tail;
            this.tail = this.tail.parent;

            if (this.tail)
                this.tail.child = null;
            
            return resultNode;
        }
        return undefined;
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