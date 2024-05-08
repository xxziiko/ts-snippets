// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
	let k = 0;
	let temp = n;

	while (true) {
		if (temp === 0) return k;
		if (temp % 2 === 1) {
			k += 1;
			temp -= 1;
		} else temp /= 2;
	}
}
