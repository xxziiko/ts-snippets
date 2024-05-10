// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
	let count = 1;
	let number = 0;
	const usedWord = [];

	for (let i = 0; i < words.length; i++) {
		if (number === n) {
			number = 1;
			count++;
		} else number++;

		if (
			usedWord.includes(words[i]) ||
			(!!usedWord.length && usedWord.at(-1).at(-1) !== words[i].at(0))
		)
			return [number, count];

		usedWord.push(words[i]);
	}

	return [0, 0];
}
