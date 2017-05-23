const assert = require('assert');
const doublyLinkedList = require('../dataStructures/doublyLinkedList.js');

describe('DoublyLinkedList', function () {
	let sampleDLL = new doublyLinkedList.DoublyLinkedList();

	beforeEach('Initializing DoublyLinkedList...', function () {
		sampleDLL = new doublyLinkedList.DoublyLinkedList();
	});

	describe('#pushTail()', function () {
		it('should allow, without error, pushing numbers to the tail of the doubly linked list"', function () {
			assert.doesNotThrow(() => {
				[1, 2, 3].map(v => sampleDLL.pushTail(v));
			});
		});
	});

	describe('#pushHead()', function () {
		it('should allow, without error, pushing numbers to the head of the doubly linked list"', function () {
			assert.doesNotThrow(() => {
				[1, 2, 3].map(v => sampleDLL.pushHead(v));
			});
		});
	});

	describe('#popTail()', function () {
		it('should match each of the values in the array as they pop off the tail one by one from the doubly linked list"', function () {
			[1, 2, 3].map(v => sampleDLL.pushTail(v));
			assert.equal(sampleDLL.popTail().data, 3);
			assert.equal(sampleDLL.popTail().data, 2);
			assert.equal(sampleDLL.popTail().data, 1);
			assert.equal(sampleDLL.popTail(), undefined);
		});
	});

	describe('#popHead()', function () {
		it('should match each of the values in the array as they pop off the head one by one from the doubly linked list"', function () {
			[1, 2, 3].map(v => sampleDLL.pushTail(v));
			assert.equal(sampleDLL.popHead().data, 1);
			assert.equal(sampleDLL.popHead().data, 2);
			assert.equal(sampleDLL.popHead().data, 3);
			assert.equal(sampleDLL.popHead(), undefined);
		});
	});
});