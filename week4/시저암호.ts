// https://school.programmers.co.kr/learn/courses/30/lessons/12926

const getASCIICode = (
	currentCode: number,
	newCode: number,
	rangeStart: number,
	rangeEnd: number,
) => {
	if (
		currentCode >= rangeStart &&
		currentCode <= rangeEnd &&
		newCode > rangeEnd
	)
		return rangeStart + (newCode - (rangeEnd + 1));

	return newCode;
};

function solution(s: string, n: number) {
	const ASCII_A = 65;
	const ASCII_Z = 90;
	const ASCII_a = 97;
	const ASCII_z = 122;
	let result = "";

	for (const char of s) {
		const charCode = char.charCodeAt(0);
		let newCode = charCode + n;

		newCode = getASCIICode(charCode, newCode, ASCII_A, ASCII_Z);
		newCode = getASCIICode(charCode, newCode, ASCII_a, ASCII_z);

		if (char !== " ") result += String.fromCharCode(newCode);
		else result += char;
	}
	return result;
}
