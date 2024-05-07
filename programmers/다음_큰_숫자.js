// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
	let answer = n;
	const count = n.toString(2).replaceAll("0", "").length;

	while (true) {
		answer += 1;

		if (count === answer.toString(2).replaceAll("0", "").length) {
			return answer;
		}
	}
}
