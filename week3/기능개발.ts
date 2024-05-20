function solution(progresses: number[], speeds: number[]) {
	const dates = [];
	const answer = [];

	for (const [i, per] of progresses.entries())
		dates.push(Math.ceil((100 - per) / speeds[i]));

	let prevDate = dates[0];
	let count = 0;
	for (const date of dates) {
		if (date <= prevDate) count++;
		else {
			answer.push(count);
			prevDate = date;
			count = 1;
		}
	}

	answer.push(count);
	return answer;
}
