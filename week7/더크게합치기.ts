// https://school.programmers.co.kr/learn/courses/30/lessons/181939

const numberToString = (num1: number, num2: number) => {
	return Number(String(num1) + String(num2));
};

function solution(a: number, b: number) {
	return Math.max(numberToString(a, b), numberToString(b, a));
}
