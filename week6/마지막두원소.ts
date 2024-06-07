// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list: number[]) {
	const lastElement = num_list[num_list.length - 1];
	const secondLastElement = num_list[num_list.length - 2];
	const newElement =
		lastElement > secondLastElement
			? lastElement - secondLastElement
			: lastElement * 2;
	return [...num_list, newElement];
}
