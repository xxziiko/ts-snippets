//  https://school.programmers.co.kr/learn/courses/30/lessons/17681

const replaceString = (n: number, arr: number[]) => {
	const result = [];

	for (const number of arr) {
		let string = "";
		for (const char of number.toString(2)) {
			if (char === "1") string += "#";
			else string += " ";
		}

		result.push(string.padStart(n));
	}
	return result;
};

function solution(n: number, arr1: number[], arr2: number[]) {
	const replaceArr1 = replaceString(n, arr1);
	const replaceArr2 = replaceString(n, arr2);
	const answer = [];

	for (const [i, string] of replaceArr1.entries()) {
		let temp = "";
		for (let j = 0; j < n; j++) {
			if (string[j] !== replaceArr2[i][j]) temp += "#";
			else temp += string[j];
		}
		answer.push(temp);
	}
	return answer;
}
