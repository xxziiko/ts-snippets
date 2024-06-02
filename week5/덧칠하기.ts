// https://school.programmers.co.kr/learn/courses/30/lessons/161989

const fillArray = (num: number) => {
	return new Array(num).fill(false);
};

function solution(n: number, m: number, section: number[]) {
	const area = fillArray(n);
	let count = 0;

	for (const number of section) area[number - 1] = true;

	for (const [i, target] of area.entries()) {
		if (target) {
			area.splice(i, m, ...fillArray(m));
			count++;
		}
	}

	return count;
}
