// https://school.programmers.co.kr/learn/courses/30/lessons/17682
import _ from "lodash";

function solution(dartResult: string) {
	const scores = [];
	let currentScore = "";

	for (const char of dartResult) {
		currentScore += char;

		if (Number.isNaN(Number(char))) {
			const baseScore = Number(currentScore.slice(0, -1));
			const multiplier = currentScore.at(-1);

			if (multiplier === "D") scores.push(baseScore ** 2);
			else if (multiplier === "T") scores.push(baseScore ** 3);
			else if (multiplier === "S") scores.push(baseScore);

			const lastIndex = scores.length - 1;
			const secondLastIndex = scores.length - 2;

			if (currentScore === "*") {
				scores[lastIndex] *= 2;
				scores[secondLastIndex] *= 2;
			}

			if (currentScore === "#") scores[lastIndex] *= -1;

			currentScore = "";
		}
	}

	const sum = _.sum(scores);
	return sum;
}
