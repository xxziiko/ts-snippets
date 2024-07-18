// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function* chunk(size: number, xs: Iterable<string>) {
	const onlyLowercaseRegex = /^[a-z]+$/;
	const arr = [...xs];

	for (const [i, x] of arr.entries()) {
		const newChar = arr.slice(i, i + size).join("");
		if (newChar.length === size && onlyLowercaseRegex.test(newChar))
			yield newChar;
	}
}

function* generateBigrams(string: string) {
	for (const bigram of chunk(2, string.toLocaleLowerCase())) yield bigram;
}

const getCountMap = (arr: Iterable<string>) => {
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
