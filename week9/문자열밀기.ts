// https://school.programmers.co.kr/learn/courses/30/lessons/120921

const rotateAndCompareString = (
	currentString: string,
	targetString: string,
	count: number,
): number => {
	const nextString = currentString.at(-1) + currentString.slice(0, -1);

	if (currentString === targetString || count === 0) return 0;

	return 1 + rotateAndCompareString(nextString, targetString, count - 1);
};

function solution(A: string, B: string) {
	const rotateCount = rotateAndCompareString(A, B, A.length);

	return rotateCount === A.length ? -1 : rotateCount;
}
