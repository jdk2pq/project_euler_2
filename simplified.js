/**
 * A more efficient algorithm for returning the sum of every even value
 * in the Fibonacci sequence whose values do not exceed the maximum specified.
 *
 * Works up until a maximum of 8944394323791464, and then it breaks.
 * @param maximum: Number
 */
function sumEvenFibonacciValues (maximum) {
	console.time('more efficient');
	if (!maximum) {
		maximum = 4000000
	}
	if (maximum <= 2) {
		return 0;
	}
	if (maximum <= 8) {
		return 2;
	}
	let term1 = 0;
	let term2 = 2;
	let nextValue = term1 + term2 * 4;
	let evens = 2;
	let sequence = '2 8 ';
	while (nextValue < maximum) {
		evens += nextValue;
		term1 = term2;
		term2 = nextValue;
		nextValue = term1 + term2 * 4;
		sequence += `${nextValue} `;
	}
	console.timeEnd('more efficient');
	console.log(sequence);
	return evens;
}
