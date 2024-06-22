// https://school.programmers.co.kr/learn/courses/30/lessons/181852

function solution(num_list: number[]) {
	return num_list.sort((a, b) => a - b).slice(5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
