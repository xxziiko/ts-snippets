// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score: number[][]) {
	const average = score.map(([english, math]) => (english + math) / 2);
	const sortedAverage = average.slice().sort((a, b) => b - a);

	return average.map((number) => sortedAverage.indexOf(number) + 1);
}
