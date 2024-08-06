// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// 효율성 통과x..

function solution(prices: number[]) {
	const result: number[] = [];

	function dfs(prices: number[]) {
		let count = 0;
		if (!prices.length) return;

		const [first, ...rest] = prices;
		for (const num of rest) {
			count++;
			if (first > num) break;
		}

		result.push(count);
		dfs(rest);
	}

	dfs(prices);

	return result;
}
console.log(solution([1, 2, 3, 2, 3]));
