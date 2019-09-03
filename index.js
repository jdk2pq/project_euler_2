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
	let sum = term1 + term2;
	let evensSum = 0;
	while (sum < maximum) {
		if (sum % 2 === 0) {
			evensSum += sum;
		}
		term1 = term2;
		term2 = sum;
		sum = term1 + term2;
	}
	return evensSum;
}

function run () {
	const maximum = document.getElementById('maximum').value;
	const result = sumEvenFibonacciValues(maximum);
	const resultElement = document.getElementById('result');
	resultElement.innerText += `\nMaximum: ${maximum}, Result: ${result}`;
}
