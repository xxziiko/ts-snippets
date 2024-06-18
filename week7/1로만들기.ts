// https://school.programmers.co.kr/learn/courses/30/lessons/181880

const calculateSteps = (num: number): number => {
	if (num === 1) return 0;
	return num % 2 === 1 ? calculateSteps(num - 1) : calculateSteps(num / 2) + 1;
};

function solution(num_list: number[]) {
	return num_list
		.map((num) => calculateSteps(num))
		.reduce((acc, curr) => acc + curr, 0);
}
