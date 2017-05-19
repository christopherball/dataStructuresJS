class BinarySearchTree {
    constructor() {
        this.root = null;
        this.preOrderTraversal = [];
        this.inOrderTraversal = [];
        this.postOrderTraversal = [];
    }

    add(data) {
        if (!this.root) {
            this.root = new Node(data);
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (data < currentNode.data) {
                    if (!currentNode.leftChild) {
                        currentNode.leftChild = new Node(data);
                        break;
                    }

                    currentNode = currentNode.leftChild;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.rightChild) {
                        currentNode.rightChild = new Node(data);
                        break;
                    }

                    currentNode = currentNode.rightChild;
                }
                else {
                    break;
                }
            }
        }
    }

    remove(data) {
        let targetNode = this.getNode(data);

        if (targetNode !== null) {
            if (!targetNode.leftChild && !targetNode.rightChild) {
                if (targetNode.data > targetNode.parent.data)
                    targetNode.parent.rightChild = null;
                    //TODO
            }
        }
    }

    preOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.preOrderTraversal = [];
        }

        this.preOrderTraversal.push(node.data);

        if (node.leftChild !== null) 
            this.preOrderTraverse(node.leftChild);
        if (node.rightChild !== null)
            this.preOrderTraverse(node.rightChild);
        
        return this.preOrderTraversal;
    }

    inOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.inOrderTraversal = [];
        }

        if (node.leftChild !== null) 
            this.inOrderTraverse(node.leftChild);

        this.inOrderTraversal.push(node.data);

        if (node.rightChild !== null)
            this.inOrderTraverse(node.rightChild);
        
        return this.inOrderTraversal;
    }

    postOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.postOrderTraversal = [];
        }

        if (node.leftChild !== null) 
            this.postOrderTraverse(node.leftChild);
        if (node.rightChild !== null)
            this.postOrderTraverse(node.rightChild);
        
        this.postOrderTraversal.push(node.data);

        return this.postOrderTraversal;
    }

    contains(data) {
        return this.getNode(data) !== null ? true : false;
    }

    getNode(data) {
        let currentNode = this.root;
        let parentNode = null;
        while (true) {
            if (currentNode === null)
                return null;
            else if (data === currentNode.data) {
                currentNode.parent = parentNode;
                return currentNode;
            }
            else if (data < currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.leftChild;
            }
            else if (data > currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.rightChild;
            }
        }
    }

    getLargestChildNode(startNode) {
        if (startNode.rightChild !== null)
            return getLargestChildNode(startNode.rightChild);
        else if (startNode.leftChild !== null)
            return getLargestChildNode(startNode.leftChild);
        
        return startNode;
    }

    getSmallestChildNode(startNode) {
        if (startNode.leftChild !== null)
            return getSmallestChildNode(startNode.leftChild);
        else if (startNode.leftChild !== null)
            return getSmallestChildNode(startNode.rightChild);
        
        return startNode;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

//TODO: Breakout below into separate test framework
const sampleBST = new BinarySearchTree();
sampleBST.add(12);
sampleBST.add(5);
sampleBST.add(15);
sampleBST.add(13);
sampleBST.add(12);
sampleBST.add(120);
sampleBST.add(19);
sampleBST.add(-1);

console.log(JSON.stringify(sampleBST, null, 4));
console.log(sampleBST.contains(11));
console.log(sampleBST.contains(13));
console.log(sampleBST.preOrderTraverse());
console.log(sampleBST.inOrderTraverse());
console.log(sampleBST.postOrderTraverse());