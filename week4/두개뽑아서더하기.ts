// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers: number[]) {
	const set = new Set<number>();

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			set.add(numbers[i] + numbers[j]);
		}
	}

	return [...set].sort((a, b) => a - b);
}
