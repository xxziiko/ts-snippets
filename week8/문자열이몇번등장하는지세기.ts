// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString: string, pat: string): number | string {
	if (!myString.length) return 0;
	const nextString = myString.substring(1);

	return myString.startsWith(pat)
		? 1 + solution(nextString, pat)
		: solution(nextString, pat);
}
