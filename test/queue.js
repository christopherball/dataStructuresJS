const assert = require('assert');
const queue = require('../dataStructures/queue.js');

describe('Queue', function () {
	let sampleQueue = new queue.Queue();

	beforeEach('Initializing Queue...', function () {
		sampleQueue = new queue.Queue();
	});

	describe('#queue()', function () {
		it('should allow, without error, queuing numbers to the queue', function () {
			assert.doesNotThrow(() => {
				[1, 2, 3].map(v => sampleQueue.queue(v));
			});
		});
	});

	describe('#dequeue()', function () {
		it('should match each of the values in the array as they dequeue from the queue one by one', function () {
			[1, 2, 3].map(v => sampleQueue.queue(v));
			assert.equal(sampleQueue.dequeue(), 1);
			assert.equal(sampleQueue.dequeue(), 2);
			assert.equal(sampleQueue.dequeue(), 3);
			assert.equal(sampleQueue.dequeue(), null);
		});
	});

	describe('#clear()', function () {
		it('should clear the entire queue, and return the remainder of queue items', function () {
			[1, 2, 3].map(v => sampleQueue.queue(v));
			assert.deepEqual(sampleQueue.clear(), [1, 2, 3]);
			assert.equal(sampleQueue.dequeue(), null);
		});
	});

	describe('#isEmpty()', function () {
		it('should indicate whether there are items remaining in the queue or not', function () {
			[1, 2, 3].map(v => sampleQueue.queue(v));
			assert.equal(sampleQueue.isEmpty(), false);
			sampleQueue.clear();
			assert.equal(sampleQueue.isEmpty(), true);
		});
	});

	describe('#size()', function () {
		it('should indicate how many items remain in the queue', function () {
			[1, 2, 3].map(v => sampleQueue.queue(v));
			assert.equal(sampleQueue.size(), 3);
			sampleQueue.dequeue();
			assert.equal(sampleQueue.size(), 2);
			sampleQueue.dequeue();
			assert.equal(sampleQueue.size(), 1);
			sampleQueue.dequeue();
			assert.equal(sampleQueue.size(), 0);
		});
	});
});