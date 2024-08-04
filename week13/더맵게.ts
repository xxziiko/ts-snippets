// https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville: number[], k: number) {
	let count = 0;

	scoville.sort((a, b) => a - b);

	while (scoville[0] < k) {
		if (scoville.length < 2) return -1;

		const first = scoville.shift();
		const second = scoville.shift();
		if (!first || !second) return;

		const newScrovile = first + second * 2;
		scoville.push(newScrovile);
		scoville.sort((a, b) => a - b);
		count++;
	}
}

// 효율성 시간초과
