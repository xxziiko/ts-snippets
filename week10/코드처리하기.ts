// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code: string) {
	let mode = 0;
	let ret = "";

	for (const [i, char] of [...code].entries()) {
		if (char === "1") {
			if (mode === 1) mode = 0;
			else mode = 1;
		} else {
			if (i % 2 === mode) ret += char;
		}
	}

	return !ret ? "EMPTY" : ret;
}
