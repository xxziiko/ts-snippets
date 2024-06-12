// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a: number, b: number) {
	const newNumber = Number(String(a) + b);
	const product = 2 * a * b;

	return newNumber >= product ? newNumber : product;
}
