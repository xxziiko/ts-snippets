// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t: string, p: string) {
	const size = p.length;
	let count = 0;
	const gen = slidingWindow(t, size);

	for (const str of gen) {
		const window = str.join("");
		if (+window <= +p) count++;
	}

	return count;
}

function* slidingWindow(xs: Iterable<string>, size: number) {
	const iterator = xs[Symbol.iterator]();
	const window = [];
	let result = iterator.next();

	while (!result.done && window.length < size) {
		window.push(result.value);
		result = iterator.next();
	}

	if (window.length === size) yield window;

	while (!result.done) {
		window.shift();
		window.push(result.value);
		yield window;
		result = iterator.next();
	}
}
