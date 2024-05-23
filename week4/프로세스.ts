// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities: number[], location: number) {
	const queue = priorities.map((priority, index) => ({ priority, index }));
	let order = 0;

	while (priorities.length > 0) {
		const current = queue.shift() ?? {
			priority: queue[0].priority,
			index: queue[0].index,
		};

		if (queue.some((process) => process.priority > current.priority))
			queue.push(current);
		else {
			order++;
			if (current.index === location) return order;
		}
	}
}
