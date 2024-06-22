// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
	const numberAsString = (num1: number, num2: number) =>
		String(num1) + String(num2);

	const ab = numberAsString(a, b);
	const ba = numberAsString(b, a);

	return ab > ba ? Number(ab) : Number(ba);
}
