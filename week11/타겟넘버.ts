// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers: number[], target: number) {
	function dfs(index = 0, sum = 0): number {
		if (index === numbers.length) return target === sum ? 1 : 0;

		const add = dfs(index + 1, sum + numbers[index]);
		const subtract = dfs(index + 1, sum - numbers[index]);

		return add + subtract;
	}

	return dfs();
}
