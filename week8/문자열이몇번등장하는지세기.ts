// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString: string, pat: string): number {
	if (!myString.length) return 0;

	return myString.substring(0, pat.length) === pat
		? 1 + solution(myString.substring(1), pat)
		: solution(myString.substring(1), pat);
}
