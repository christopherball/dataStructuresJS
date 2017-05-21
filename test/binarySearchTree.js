var assert = require('assert');
var binarySearchTree = require('../dataStructures/binarySearchTree.js');

describe('BinarySearchTree', function () {
	let sampleBST = new binarySearchTree.BinarySearchTree();

	beforeEach('Initializing BinarySearchTree...', function () {
		sampleBST = new binarySearchTree.BinarySearchTree();
		[12, 5, 15, 13, 12, 120, 19, -1].map(v => sampleBST.add(v));
	});

	describe('#contains()', function () {
		it('should return true for containing all of the following: [ 12, 5, 15, 13, 120, 19, -1 ]', function () {
			assert.equal([12, 5, 15, 13, 120, 19, -1].every(v => sampleBST.contains(v)), true);
		});

		it('should return true for containing only the following: [ 12, 5, 15, 13, 120, 19 ]', function () {
			sampleBST.remove(-1);
			assert.equal([12, 5, 15, 13, 120, 19].every(v => sampleBST.contains(v)), true);
			assert.equal(sampleBST.contains(-1), false);
		});
	});

	describe('#preOrderTraverse()', function () {
		it('should return the following tree order: [ 12, 5, -1, 15, 13, 120, 19 ]', function () {
			assert.deepEqual(sampleBST.preOrderTraverse(), [12, 5, -1, 15, 13, 120, 19]);
		});
	});

	describe('#inOrderTraverse()', function () {
		it('should return the following tree order: [ -1, 5, 12, 13, 15, 19, 120 ]', function () {
			assert.deepEqual(sampleBST.inOrderTraverse(), [-1, 5, 12, 13, 15, 19, 120]);
		});
	});

	describe('#postOrderTraverse()', function () {
		it('should return the following tree order: [ -1, 5, 13, 19, 120, 15, 12 ]', function () {
			assert.deepEqual(sampleBST.postOrderTraverse(), [-1, 5, 13, 19, 120, 15, 12]);
		});
	});

	describe('#remove()', function () {
		it('should maintain valid tree structure after removing node with no children', function () {
			assert.doesNotThrow(() => {
				sampleBST.remove(-1);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), [5, 12, 13, 15, 19, 120]);
		});

		it('should maintain valid tree structure after removing node with 1 child', function () {
			assert.doesNotThrow(() => {
				sampleBST.remove(120);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), [-1, 5, 12, 13, 15, 19]);
		});

		it('should maintain valid tree structure after removing node with 2 children', function () {
			assert.doesNotThrow(() => {
				sampleBST.remove(15);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), [-1, 5, 12, 13, 19, 120]);
		});

		it('should maintain valid tree structure after removing root node with no children', function () {
			assert.doesNotThrow(() => {
				sampleBST = new binarySearchTree.BinarySearchTree();
				sampleBST.add(12);
				sampleBST.remove(12);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), []);
		});

		it('should maintain valid tree structure after removing root node with 1 child', function () {
			assert.doesNotThrow(() => {
				sampleBST.remove(-1);
				sampleBST.remove(5);
				sampleBST.remove(12);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), [13, 15, 19, 120]);
		});

		it('should maintain valid tree structure after removing root node with 2 children', function () {
			assert.doesNotThrow(() => {
				sampleBST.remove(12);
			});
			assert.deepEqual(sampleBST.inOrderTraverse(), [-1, 5, 13, 15, 19, 120]);
		});
	});

	describe('#getMaxNode()', function () {
		it('should return the node containing the max data 120', function () {
			assert.deepEqual(sampleBST.getMaxNode(sampleBST.root), sampleBST.getNode(120));
		});
	});	
		
	describe('#getMinNode()', function () {
		it('should return the node containing the min data -1', function () {
			assert.deepEqual(sampleBST.getMinNode(sampleBST.root), sampleBST.getNode(-1));
		});
	});
});