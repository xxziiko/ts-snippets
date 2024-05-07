// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
	let count = 0;
	let zeroCount = 0;
	let number = s;
	let stringLength = s.length;

	while (number > 1) {
		for (const i of number) {
			if (i === "0") zeroCount += 1;
		}

		number = number.replaceAll("0", "");
		stringLength = number.length;
		number = stringLength.toString(2);
		count += 1;
	}

	return [count, zeroCount];
}
