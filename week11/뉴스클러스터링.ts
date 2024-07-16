// https://school.programmers.co.kr/learn/courses/30/lessons/17677

const generateBigrams = (string: string) => {
	const lowercaseString = string.toLocaleLowerCase();
	const specialCharacterRegex = /[^a-z]/g; // 소문자를 제외한 모든 문자
	const result = [];

	for (const [i, char] of [...lowercaseString].entries()) {
		const newChar = lowercaseString.slice(i, i + 2);
		const isNotNumber = [...newChar].every((char) =>
			Number.isNaN(Number(char)),
		);

		if (
			!newChar.includes(" ") &&
			isNotNumber &&
			newChar.length === 2 &&
			!specialCharacterRegex.test(newChar)
		)
			result.push(newChar);
	}
	return result;
};

const getCountMap = (arr: string[]) => {
	const map = new Map();

	for (const string of arr) {
		map.set(string, (map.get(string) ?? 0) + 1);
	}

	return map;
};

function solution(str1: string, str2: string) {
	const str1Map = getCountMap(generateBigrams(str1));
	const str2Map = getCountMap(generateBigrams(str2));

	let unionCount = 0;
	let count = 0;

	const keys = new Set([...str1Map.keys(), ...str2Map.keys()]);

	for (const key of keys) {
		const count1 = str1Map.get(key) ?? 0;
		const count2 = str2Map.get(key) ?? 0;
		count += Math.min(count1, count2);
		unionCount += Math.max(count1, count2);
	}

	return !unionCount ? 65536 : Math.floor((count / unionCount) * 65536);
}

// 정확도 92.3
