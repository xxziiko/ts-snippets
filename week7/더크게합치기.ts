// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
	const ab = String(a) + String(b);
	const ba = String(a) + String(b);
	const isSameString = ab.split("").every((char) => ab.charAt(0) === char);

	return isSameString ? Number(ab) : Math.max(Number(ab), Number(ba));
}
