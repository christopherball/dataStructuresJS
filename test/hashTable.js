const assert = require('assert');
const hashTable = require('../dataStructures/hashTable.js');

describe('HashTable', function () {
	let sampleHT = new hashTable.HashTable();

	beforeEach('Initializing HashTable...', function () {
		sampleHT = new hashTable.HashTable();
		sampleHT.add("apple", "red");
		sampleHT.add("banana", "yellow");
		sampleHT.add("pear", "brown");
		sampleHT.add("grape", "green");
	});

	describe('#add()', function () {
		it('should successfully add the key-value pair of "orange: orange', function () {
			sampleHT.add("orange", "orange");
			assert.equal(sampleHT.get("orange"), "orange");
		});
	});

	describe('#remove()', function () {
		it('should reduce the size of the hashtable from 4 to 3', function() {
			sampleHT.remove("apple");
			sampleHT.remove("mysteryFruit");
			assert.equal(sampleHT.size(), 3);
		});
	});

	describe('#get()', function () {
		it('should successfully retrieve the value of "red" for the "apple" key', function () {
			assert.equal(sampleHT.get("apple"), "red");
		});

		it('should retrieve the value of "undefined" for the "mysteryFruit" key', function () {
			assert.equal(sampleHT.get("mysteryFruit"), undefined);
		});
	});

	describe('#contains()', function () {
		it('should contain an "apple", but not a "mysteryFruit', function() {
			assert.equal(sampleHT.contains("apple"), true);
			assert.equal(sampleHT.contains("mysteryFruit"), false);
		});
	});

	describe('#clear()', function () {
		it('should reduce the size of the hashtable down to 0', function() {
			assert.equal(sampleHT.size(), 4);
			sampleHT.clear();
			assert.equal(sampleHT.size(), 0);
		});
	});

	describe('#isEmpty()', function () {
		it('should return false when its size is greater than 0, and true otherwise', function() {
			assert.equal(sampleHT.size(), 4);
			assert.equal(sampleHT.isEmpty(), false);
			sampleHT.clear();
			assert.equal(sampleHT.isEmpty(), true);
		});
	});

	describe('#size()', function () {
		it('should return a size of 4', function() {
			assert.equal(sampleHT.size(), 4);
		});
	});
});