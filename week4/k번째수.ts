// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array: number[], commands: number[][]) {
	const answer = [];
	for (let i = 0; i < commands.length; i++) {
		const [index, j, k] = commands[i];
		const temp = array.slice(index - 1, j).sort((a, b) => a - b);
		answer.push(temp[k - 1]);
	}

	return answer;
}
