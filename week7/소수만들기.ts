// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (num: number) => {
	for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

	return true;
};

function solution(nums: number[]) {
	let count = 0;
	const sumNumbers = [];
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				sumNumbers.push(nums[i] + nums[j] + nums[k]);
			}
		}
	}

	for (const number of sumNumbers) {
		if (isPrime(number)) count++;
	}

	return count;
}
