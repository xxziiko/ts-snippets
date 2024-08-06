// https://school.programmers.co.kr/learn/courses/30/lessons/120876

import _ from "lodash";

function solution(lines: [number, number][]) {
	const overlaps = [];

	for (const [i, [start1, end1]] of lines.entries()) {
		for (const [start2, end2] of lines.slice(i + 1)) {
			const overlapstart = Math.max(start1, start2);
			const overlapEnd = Math.min(end1, end2);

			if (overlapstart < overlapEnd) {
				overlaps.push([overlapstart, overlapEnd]);
			}
		}
	}

	if (!overlaps.length) return 0;

	if (overlaps.length === 3) {
		const overlapstart = _.minBy(overlaps, (item) => item[0]);
		const overlapEnd = _.maxBy(overlaps, (item) => item[1]);

		return overlapEnd[1] - overlapstart[0];
	}

	return _.sumBy(overlaps, ([start, end]) => end - start);
}
