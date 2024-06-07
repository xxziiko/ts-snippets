// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n: number) {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		if (n % 2 === 1 && i % 2 === 1) result += i;
		if (n % 2 === 0 && i % 2 === 0) result += i * i;
	}

	return result;
}
