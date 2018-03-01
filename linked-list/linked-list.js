function LinkedList() {
	this.head = null;	// Points to the beginning of the list
	this.tail = null; // Points to the end of the list
}

// Adding nodes to the head of the linked list
LinkedList.prototype.addToHead = function (value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
}

// Adding nodes to the tail of the linked list
LinkedList.prototype.addToTail = function (value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}

	this.tail = newNode;
}

// Remove node from head
LinkedList.prototype.removeHead = function () {
	if (!this.head) return null;

	const val = this.head.value;
	this.head = this.head.next;

	if (this.head) {
		this.head.prev = null;
	} else {
		this.tail = null;
	}

	return val;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

const ll = new LinkedList();
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);
ll.addToHead(100);
console.log(ll.removeHead());
console.log(ll.removeHead());
console.log(ll.removeHead());

console.log(ll);
