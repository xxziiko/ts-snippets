// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function permutations<T>(xs: T[][], pick: number): T[][][] {
	const result = [];

	if (pick === 1) return xs.map((el) => [el]);

	for (const [i, fixed] of xs.entries()) {
		const rest = [...xs.slice(0, i), ...xs.slice(i + 1)];
		const permutation = permutations(rest, pick - 1);
		const attached = permutation.map((el) => [fixed, ...el]);

		result.push(...attached);
	}

	return result;
}

function solution(k: number, dungeons: [number, number][]) {
	const permutation = permutations(dungeons, dungeons.length);
	let result = 0;

	for (const nums of permutation) {
		let count = 0;
		let hp = k;
		for (const [a, b] of nums) {
			if (hp >= a) {
				hp -= b;
				count++;
			}
		}

		result = Math.max(result, count);
	}

	return result;
}
