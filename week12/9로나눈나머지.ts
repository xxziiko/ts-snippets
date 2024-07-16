// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number: string) {
	const nine = 9;
	let sum = 0;

	for (const num of number.split("")) sum += Number(num);

	return sum % nine;
}
