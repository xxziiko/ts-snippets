// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots: number[][]) {
	const x = [...new Set(dots.map((x) => x[0]))];
	const y = [...new Set(dots.map((y) => y[1]))];

	return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
}
