// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s: string) {
	let firstCharCount = 0;
	let lastCharCount = 0;
	let count = 0;
	let firstChar = s[0];

	for (const [i, char] of [...s].entries()) {
		if (firstChar === char) firstCharCount++;
		else lastCharCount++;

		if (firstCharCount === lastCharCount) {
			count++;
			firstCharCount = 0;
			lastCharCount = 0;
			if (i + 1 < s.length) firstChar = s[i + 1];
		}
	}
	if (firstCharCount !== 0 || lastCharCount !== 0) count++;

	return count;
}
