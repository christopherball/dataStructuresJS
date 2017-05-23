const assert = require('assert');
const stack = require('../dataStructures/stack.js');

describe('Stack', function () {
	let sampleStack = new stack.Stack();

	beforeEach('Initializing DoublyLinkedList...', function () {
		sampleStack = new stack.Stack();
	});

	describe('#push()', function () {
		it('should allow, without error, pushing numbers to the stack', function () {
			assert.doesNotThrow(() => {
				[1, 2, 3].map(v => sampleStack.push(v));
			});
		});
	});

	describe('#pop()', function () {
		it('should match each of the values in the array as they pop off the stack one by one', function () {
			[1, 2, 3].map(v => sampleStack.push(v));
			assert.equal(sampleStack.pop(), 3);
			assert.equal(sampleStack.pop(), 2);
			assert.equal(sampleStack.pop(), 1);
			assert.equal(sampleStack.pop(), null);
		});
	});

	describe('#clear()', function () {
		it('should clear the entire stack, and return the remainder of stack items', function () {
			[1, 2, 3].map(v => sampleStack.push(v));
			assert.deepEqual(sampleStack.clear(), [3, 2, 1]);
			assert.equal(sampleStack.pop(), null);
		});
	});

	describe('#isEmpty()', function () {
		it('should indicate whether there are items remaining on the stack or not', function () {
			[1, 2, 3].map(v => sampleStack.push(v));
			assert.equal(sampleStack.isEmpty(), false);
			sampleStack.clear();
			assert.equal(sampleStack.isEmpty(), true);
		});
	});

	describe('#size()', function () {
		it('should indicate how many items remain in the stack', function () {
			[1, 2, 3].map(v => sampleStack.push(v));
			assert.equal(sampleStack.size(), 3);
			sampleStack.pop();
			assert.equal(sampleStack.size(), 2);
			sampleStack.pop();
			assert.equal(sampleStack.size(), 1);
			sampleStack.pop();
			assert.equal(sampleStack.size(), 0);
		});
	});
});