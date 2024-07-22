// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word: string) {
	const letters = ["A", "E", "I", "O", "U"];
	const words: string[] = [];

	function dfs(currentWord = "") {
		if (currentWord.length > 5) return;
		words.push(currentWord);
		for (const letter of letters) {
			dfs(currentWord + letter);
		}
	}

	dfs();

	return words.indexOf(word);
}
