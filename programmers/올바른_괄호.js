// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
	const stack = [];

	if (s[0] === ")") return false;

	for (const i of s) {
		if (stack.at(-1) === "(" && i === ")") stack.pop();
		else stack.push(i);
	}

	return stack.length === 0;
}
