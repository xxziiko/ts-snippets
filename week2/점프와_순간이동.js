// https://school.programmers.co.kr/learn/courses/30/lessons/12980

const countDivide = (k, n) => {
	if (n === 0) return k;

	return n % 2 === 1 ? countDivide(k + 1, n - 1) : countDivide(k, n / 2);
};

function solution(n) {
	return countDivide(0, n);
}
