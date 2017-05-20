var assert = require('assert');
var binarySearchTree = require('../dataStructures/binarySearchTree.js');

const sampleBST = new binarySearchTree.BinarySearchTree();

describe('BinarySearchTree', function () {
	describe('#add()', function () {
		it('should not return any error adding the following: [ 12, 5, 15, 13, 12, 120, 19, -1 ]', function () {
			assert.doesNotThrow(() => {
				[ 12, 5, 15, 13, 12, 120, 19, -1 ].map(v => sampleBST.add(v));
			})
		});
	});
});

describe('BinarySearchTree', function () {
	describe('#contains()', function () {
		it('should return true for containing all of the following: [ 12, 5, 15, 13, 120, 19, -1 ]', function () {
			assert.equal([ 12, 5, 15, 13, 120, 19, -1 ].every(v => sampleBST.contains(v)), true);
		});
	});
});

describe('BinarySearchTree', function () {
	describe('#preOrderTraverse()', function () {
		it('should return the following tree order: [ 12, 5, -1, 15, 13, 120, 19 ]', function () {
			assert.deepEqual(sampleBST.preOrderTraverse(), [ 12, 5, -1, 15, 13, 120, 19 ]);
		});
	});
});

describe('BinarySearchTree', function () {
	describe('#inOrderTraverse()', function () {
		it('should return the following tree order: [ -1, 5, 12, 13, 15, 19, 120 ]', function () {
			assert.deepEqual(sampleBST.inOrderTraverse(), [ -1, 5, 12, 13, 15, 19, 120 ]);
		});
	});
});

describe('BinarySearchTree', function () {
	describe('#postOrderTraverse()', function () {
		it('should return the following tree order: [ -1, 5, 13, 19, 120, 15, 12 ]', function () {
			assert.deepEqual(sampleBST.postOrderTraverse(), [ -1, 5, 13, 19, 120, 15, 12 ]);
		});
	});
});