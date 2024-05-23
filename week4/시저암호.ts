// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s: string, n: number) {
	let result = "";

	for (const char of s) {
		const charCode = char.charCodeAt(0);
		let ASCII = charCode + n;

		if (charCode >= 65 && charCode <= 90 && ASCII > 90)
			ASCII = 65 + (ASCII - 91);
		if (charCode >= 97 && charCode <= 122 && ASCII > 122)
			ASCII = 97 + (ASCII - 123);

		if (char !== " ") result += String.fromCharCode(ASCII);
		else result += char;
	}

	return result;
}
