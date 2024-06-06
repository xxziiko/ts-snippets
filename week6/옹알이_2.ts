// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling: string[]) {
	const strings = ["aya", "ye", "woo", "ma"];
	let result = 0;

	for (const originalWord of babbling) {
		let word = "";
		let removedWord = originalWord;

		for (const char of originalWord) {
			word += char;

			const findIndex = strings.indexOf(word);
			if (findIndex !== -1) {
				removedWord = removedWord.slice(word.length);
				if (word !== removedWord.slice(0, word.length)) word = "";
			}
		}

		if (!removedWord) result++;
	}

	return result;
}
