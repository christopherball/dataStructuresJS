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
            //Node to be removed has no children
            if (!targetNode.leftChild && !targetNode.rightChild) {
                if (targetNode === this.root)
                    this.root = null;
                else if (targetNode.data > targetNode.parent.data)
                    targetNode.parent.rightChild = null;
                else
                    targetNode.parent.leftChild = null;
            }

            //Node to be removed has one child
            else if ((targetNode.leftChild && !targetNode.rightChild) || (!targetNode.leftChild && targetNode.rightChild)) {
                if (targetNode === this.root) {
                    if (targetNode.leftChild)
                        this.root = targetNode.leftChild;
                    else
                        this.root = targetNode.rightChild;
                }
                else if (targetNode.leftChild)
                    targetNode.parent.rightChild = targetNode.leftChild;
                else
                    targetNode.parent.leftChild = targetNode.rightChild;
            }

            //Node to be removed has two children
            else {
                if (targetNode === this.root) {
                    this.root = targetNode.leftChild;
                    this.root.rightChild = targetNode.rightChild;
                }
                else {
                    if (targetNode.data > this.root.data) {
                        let minNode = this.getMinNode(targetNode.rightChild);
                        this.remove(minNode.data);
                        targetNode.data = minNode.data;
                    }
                    else {
                        let maxNode = this.getMaxNode(targetNode.leftChild);
                        this.remove(maxNode.data);
                        targetNode.data = maxNode.data;
                    }
                }
            }
        }
    }

    preOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.preOrderTraversal = [];
        }

        if (node !== null) {
            this.preOrderTraversal.push(node.data);

            if (node.leftChild !== null) 
                this.preOrderTraverse(node.leftChild);
            if (node.rightChild !== null)
                this.preOrderTraverse(node.rightChild);
        }

        return this.preOrderTraversal;
    }

    inOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.inOrderTraversal = [];
        }

        if (node !== null) {
            if (node.leftChild !== null) 
                this.inOrderTraverse(node.leftChild);

            this.inOrderTraversal.push(node.data);

            if (node.rightChild !== null)
                this.inOrderTraverse(node.rightChild);
        }

        return this.inOrderTraversal;
    }

    postOrderTraverse(node) {
        if (node === undefined) {
            node = this.root;
            this.postOrderTraversal = [];
        }

        if (node !== null) {
            if (node.leftChild !== null) 
                this.postOrderTraverse(node.leftChild);
            if (node.rightChild !== null)
                this.postOrderTraverse(node.rightChild);
            
            this.postOrderTraversal.push(node.data);
        }
    
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

    getMaxNode(startNode) {
        if (startNode.rightChild !== null)
            return this.getMaxNode(startNode.rightChild);
        
        return startNode;
    }

    getMinNode(startNode) {
        if (startNode.leftChild !== null)
            return this.getMinNode(startNode.leftChild);
        
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

module.exports = {
    BinarySearchTree: BinarySearchTree,
    Node: Node
}