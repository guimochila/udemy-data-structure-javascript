function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

// Hash method
HashTable.prototype.hash = function (key) {
	let total = 0;

	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}

	return total % this.numBuckets;
}

// Insert method - O(1)
HashTable.prototype.insert = function (key, value) {
	const index = this.hash(key);

	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	} else {
		let currentNode = this.buckets[index];
		while (currentNode.next) {

			if (currentNode.next.key === key) {
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}

		currentNode.next = new HashNode(key, value);
	}
}

// Get method
HashTable.prototype.get = function (key) {
	const index = this.hash(key);

	if (!this.buckets[index]) {
		return null;
	} else {
		let currentNode = this.buckets[index];

		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}

		return null;
	}
}

// Retreive all
HashTable.prototype.retreiveAll = function () {
	let results = [];

	for (let i = 0; i < this.numBuckets; i++) {
		let currentNode = this.buckets[i];
		while (currentNode) {
			results.push(currentNode);
			currentNode = currentNode.next;
		}
	}

	return results;
}

const hashT = new HashTable(30);
hashT.insert('Dean', 'dean@mail.com');
hashT.insert('Megan', 'mean2@mail.com');
hashT.insert('Megan', 'mean1@mail.com');
hashT.insert('John', 'john@mail.com');
hashT.insert('Dane', 'dane@mail.com');
hashT.insert('Dane', 'dane2@mail.com');

// console.log(hashT.get('Megan'));

console.log(hashT.retreiveAll());
