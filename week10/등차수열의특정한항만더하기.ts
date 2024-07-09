// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a: number, b: number, included: boolean[]) {
	let answer = 0;
	let next = a;

	for (const boolean of included) {
		if (boolean) answer += next;
		next += b;
	}

	return answer;
}
