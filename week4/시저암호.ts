// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s: string, n: number) {
	const ASCII_A = 65;
	const ASCII_Z = 90;
	const ASCII_a = 97;
	const ASCII_z = 122;
	let result = "";

	for (const char of s) {
		const charCode = char.charCodeAt(0);
		let ASCII = charCode + n;

		if (charCode >= ASCII_A && charCode <= ASCII_Z && ASCII > ASCII_Z)
			ASCII = ASCII_A + (ASCII - (ASCII_Z + 1));
		if (charCode >= ASCII_a && charCode <= ASCII_z && ASCII > ASCII_z)
			ASCII = ASCII_a + (ASCII - (ASCII_z + 1));

		if (char !== " ") result += String.fromCharCode(ASCII);
		else result += char;
	}
	return result;
}
