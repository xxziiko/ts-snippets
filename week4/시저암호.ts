// https://school.programmers.co.kr/learn/courses/30/lessons/12926

const getASCII = (
	charCode: number,
	ASCII: number,
	ASCII_1: number,
	ASCII_2: number,
) => {
	if (charCode >= ASCII_1 && charCode <= ASCII_2 && ASCII > ASCII_2)
		return ASCII_1 + (ASCII - (ASCII_2 + 1));

	return ASCII;
};

function solution(s: string, n: number) {
	const ASCII_A = 65;
	const ASCII_Z = 90;
	const ASCII_a = 97;
	const ASCII_z = 122;
	let result = "";

	for (const char of s) {
		const charCode = char.charCodeAt(0);
		let ASCII = charCode + n;

		ASCII = getASCII(charCode, ASCII, ASCII_A, ASCII_Z);
		ASCII = getASCII(charCode, ASCII, ASCII_a, ASCII_z);

		if (char !== " ") result += String.fromCharCode(ASCII);
		else result += char;
	}
	return result;
}
