// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
	return Math.max(Number(String(a) + b), Number(String(b) + a));
}
