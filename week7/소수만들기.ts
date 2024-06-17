// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (num: number) => {
	for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

	return true;
};

const sumNumbers: number[] = [];
const combinations: number[] = [];
const getSumCombination = (numbers: number[], count: number) => {
	const nextCount = count - 1;

	if (count === 0) {
		const sum = combinations.reduce((acc, num) => acc + num, 0);
		sumNumbers.push(sum);
		return;
	}

	for (const [i, number] of numbers.entries()) {
		combinations.push(number);
		getSumCombination(numbers.slice(i + 1), nextCount);
		combinations.pop(); // 백트래킹
	}
};

function solution(nums: number[]) {
	let count = 0;

	getSumCombination(nums, 3);

	for (const number of sumNumbers) {
		if (isPrime(number)) count++;
	}

	return count;
}
