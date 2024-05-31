// https://school.programmers.co.kr/learn/courses/30/lessons/12926

const wrapAsciiCodeInRange = (
	rangeStart: number,
	rangeEnd: number,
	currentCode: number,
	targetCode: number,
) => {
	if (
		currentCode >= rangeStart &&
		currentCode <= rangeEnd &&
		targetCode > rangeEnd
	)
		return rangeStart + (targetCode - (rangeEnd + 1));

	return targetCode;
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

		newCode = wrapAsciiCodeInRange(ASCII_A, ASCII_Z, charCode, newCode);
		newCode = wrapAsciiCodeInRange(ASCII_a, ASCII_z, charCode, newCode);

		if (char !== " ") result += String.fromCharCode(newCode);
		else result += char;
	}
	return result;
}
