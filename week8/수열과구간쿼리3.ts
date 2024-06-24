// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr: number[], queries: [number, number][]) {
	for (const [i, j] of queries) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	return arr;
}
