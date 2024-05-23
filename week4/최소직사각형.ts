// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes: number[][]) {
	let maxWidth = 0;
	let maxHeight = 0;

	for (const size of sizes) {
		size.sort((a, b) => b - a);
		if (maxWidth < size[0]) maxWidth = size[0];
		if (maxHeight < size[1]) maxHeight = size[1];
	}

	return maxWidth * maxHeight;
}
