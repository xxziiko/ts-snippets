// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common: number[]) {
	const commonDifference = common[1] - common[0];
	const commonRatio = common[1] / common[0];

	return common[2] - common[1] === commonDifference
		? common.at(-1) + commonDifference
		: common.at(-1) * commonRatio;
}
