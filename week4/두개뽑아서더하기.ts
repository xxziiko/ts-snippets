// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers: number[]) {
	const set = new Set<number>();

	for (const [i, num1] of numbers.entries()) {
		for (const [j, num2] of numbers.entries()) {
			if (i < j) set.add(num1 + num2);
		}
	}

	return [...set].sort((a, b) => a - b);
}
