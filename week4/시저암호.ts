// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s: string, n: number) {
	const ASCII_A = "A".charCodeAt(0);
	const ASCII_Z = "Z".charCodeAt(0);
	const ASCII_a = "a".charCodeAt(0);
	const ALPHABET_COUNT = 26;
	let result = "";

	for (const char of s) {
		const charCode = char.charCodeAt(0);
		const isUpper = charCode >= ASCII_A && charCode <= ASCII_Z;
		const index = isUpper ? charCode % ASCII_A : charCode % ASCII_a;
		const baseCharCode = isUpper ? ASCII_A : ASCII_a;

		result +=
			char !== " "
				? String.fromCharCode(baseCharCode + ((index + n) % ALPHABET_COUNT))
				: char;
	}

	return result;
}
