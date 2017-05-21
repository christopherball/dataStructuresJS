# dataStructuresJS
Serves as a playground for reproducing common data structures using ES6 Javascript with NodeJS.

To execute full unit test suite against all data structures, simply type "npm test".  Here is an example showing tests run against the BinarySearchTree data structure:

  BinarySearchTree
    #contains()
      ✓ should return true for containing all of the following: [ 12, 5, 15, 13, 120, 19, -1 ]
      ✓ should return true for containing only the following: [ 12, 5, 15, 13, 120, 19 ]
    #preOrderTraverse()
      ✓ should return the following tree order: [ 12, 5, -1, 15, 13, 120, 19 ]
    #inOrderTraverse()
      ✓ should return the following tree order: [ -1, 5, 12, 13, 15, 19, 120 ]
    #postOrderTraverse()
      ✓ should return the following tree order: [ -1, 5, 13, 19, 120, 15, 12 ]
    #remove()
      ✓ should maintain valid tree structure after removing node with no children
      ✓ should maintain valid tree structure after removing node with 1 child
      ✓ should maintain valid tree structure after removing node with 2 children
      ✓ should maintain valid tree structure after removing root node with no children
      ✓ should maintain valid tree structure after removing root node with 1 child
      ✓ should maintain valid tree structure after removing root node with 2 children
    #getMaxNode()
      ✓ should return the node containing the max data 120
    #getMinNode()
      ✓ should return the node containing the min data -1


  13 passing (15ms)