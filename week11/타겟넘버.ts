// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers: number[], target: number, sum = 0): number {
	if (!numbers.length) return target === sum ? 1 : 0;
	const num = numbers[0];

	const add = solution(numbers.slice(1), target, num + sum);
	const subtract = solution(numbers.slice(1), target, num - sum);

	return add + subtract;
}
