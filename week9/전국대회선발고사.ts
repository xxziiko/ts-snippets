// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank: number[], attendance: boolean[]) {
	const [a, b, c] = rank
		.flatMap((num, index) => (attendance[index] ? [[index, num]] : []))
		.sort((a, b) => a[1] - b[1])
		.slice(0, 3);

	return a[0] * 10000 + b[0] * 100 + c[0];
}
