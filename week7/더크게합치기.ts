// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
	const ab = Number(String(a) + String(b));
	const ba = Number(String(b) + String(a));

	return ab === ba ? ab : Math.max(ab, ba);
}
