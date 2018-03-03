function BinarySearch(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

// Insert method
BinarySearch.prototype.insert = function (value) {
	if (value <= this.value) {

		if (!this.left) {
			this.left = new BinarySearch(value);
		} else {
			this.left.insert(value);
		}

	} else if (value > this.value) {

		if (!this.right) {
			this.right = new BinarySearch(value);
		} else {
			this.right.insert(value);
		}
	}
};

// Contains method
BinarySearch.prototype.contains = function (value) {

	if (value === this.value) {
		return true;
	} else if (value < this.value) {
		if (!this.left) {
			return false;
		} else {
			return this.left.contains(value);
		}

	} else if (value > this.value) {
		if (!this.right) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
}

// Depth First traversal
BinarySearch.prototype.depthFirstTraversal = function (iteratorFunc, order) {

	if (order === 'pre-order') iteratorFunc(this.value);

	if (this.left) {
		this.left.depthFirstTraversal(iteratorFunc, order);
	}

	if (order === 'in-order') iteratorFunc(this.value);

	if (this.right) {
		this.right.depthFirstTraversal(iteratorFunc, order);
	}

	if (order === 'post-order') iteratorFunc(this.value);
}

// Breadth first Traversal
BinarySearch.prototype.breadthFirstTraversal = function (iteratorFunc) {
	const queue = [this]; // FIFO

	while (queue.length) {
		let treeNode = queue.shift();
		iteratorFunc(treeNode);

		if (treeNode.left) queue.push(treeNode.left);
		if (treeNode.right) queue.push(treeNode.right);
	}
}

// Get min Val
BinarySearch.prototype.getMinVal = function () {

	if (this.left) {
		return this.left.getMinVal();
	} else {
		return this.value;
	}
}

// Get max Val
BinarySearch.prototype.getMaxVal = function () {

	if (this.right) {
		return this.right.getMaxVal();
	} else {
		return this.value;
	}
}

const bst = new BinarySearch(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


function log(node) {
	console.log(node.value);
}

// bst.depthFirstTraversal(log, 'post-order');
// bst.breadthFirstTraversal(log);
// bst.contains(100);

console.log(bst.getMinVal());
console.log(bst.getMaxVal());
