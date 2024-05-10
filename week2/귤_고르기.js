// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
	const map = new Map();
	let sum = 0;

	for (const item of tangerine) map.set(item, (map.get(item) || 0) + 1);

	const sortedList = [...map.values()].sort((a, b) => b - a);

	for (let i = 0; i <= sortedList.length; i++) {
		if (sum >= k) return sortedList.slice(0, i).length;
		sum += sortedList[i];
	}
}
