// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps: number[][]) {
	const rowLen = maps.length;
	const colLen = maps[0].length;
	const rowGoal = rowLen - 1;
	const colGoal = colLen - 1;
	const direction = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	const bfs = () => {
		const queue = [[0, 0, 1]];
		maps[0][0] = 0;

		while (!queue.length) {
			const [row, col, distance] = queue[0];

			// 도착지
			if (row === rowGoal && col === colGoal) return distance;

			for (const [r, c] of direction) {
				const newRow = row + r;
				const newCol = col + c;

				if (
					newRow >= 0 &&
					newRow < rowLen &&
					newCol >= 0 &&
					newCol < colLen &&
					maps[newRow][newCol] === 1
				) {
					queue.push([newRow, newCol, distance + 1]);
					maps[newRow][newCol] = 0;
				}
			}
		}

		return -1;
	};

	return bfs();
}
