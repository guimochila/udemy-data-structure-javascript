function factorial(num) {
	// Base case
	if (num === 1) {
		return num;
	} else {
		// Recursion
		return num * factorial(num - 1);
	}
}

console.log(factorial(4));
