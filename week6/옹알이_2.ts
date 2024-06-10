// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling: string[]) {
	const strings = ["aya", "ye", "woo", "ma"];
	let result = 0;

	for (const originalWord of babbling) {
		let tempWord = originalWord;
		let prevWord = "";

		while (tempWord.length > 0) {
			let found = false;
			for (const string of strings) {
				if (tempWord.startsWith(string) && string !== prevWord) {
					prevWord = string;
					tempWord = tempWord.slice(string.length);
					found = true;
				}
			}
			if (!found) break;
		}

		if (!tempWord) result++;
	}

	return result;
}
