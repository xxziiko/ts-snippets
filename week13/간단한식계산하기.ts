// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial: string) {
	let result = 0;
	const [a, symbol, b] = binomial.split(" ");
	const num1 = Number(a);
	const num2 = Number(b);

	if (symbol === "+") result = num1 + num2;
	else if (symbol === "-") result = num1 - num2;
	else result = num1 * num2;

	return result;
}
