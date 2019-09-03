/**
 * Returns the sum of every even value in the Fibonacci sequence whose
 * values do not exceed the maximum specified
 * @param maximum: Number
 */
function sumEvenFibonacciValues (maximum) {
	if (!maximum) {
		maximum = 4000000
	}
	let term1 = 0;
	let term2 = 1;
	let nextValue = term1 + term2;
	let evensSum = 0;
	while (nextValue < maximum) {
		if (nextValue % 2 === 0) {
			evensSum += nextValue;
		}
		term1 = term2;
		term2 = nextValue;
		nextValue = term1 + term2;
	}
	return evensSum;
}

function run () {
	const maximum = document.getElementById('maximum').value;
	const result = sumEvenFibonacciValues(maximum);
	const resultElement = document.getElementById('result');
	resultElement.innerText += `\nMaximum: ${maximum}, Result: ${result}`;
}
