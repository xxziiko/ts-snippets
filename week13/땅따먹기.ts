// https://school.programmers.co.kr/learn/courses/30/lessons/12913

// 각 행에서 하나의 숫자를 선택하는 것 = 전체 문제
// 각 행에서 하나의 선택하는 부분문제

// 이전 행에서 선택한 열과 동일한 열을 제외하고 최대 값을 선택하는 부분문제

// 이전 행에서 선택한 열에 따라 행에서 선택할 수 있는 최대 값이 달라진다.

function solution(land: number[][]) {
	const numRows = land.length;
	const numCols = land[0].length;
	const arr = Array.from(Array(numRows), () => Array(numCols).fill(0));

	arr[0] = land[0];

	for (const [i, row] of land.entries()) {
		if (i === 0) continue;

		// 같은 열을 제외한 이전 행의 최댓값을 더한다..
		for (const [j, num] of row.entries()) {
			// 같은 열을 제외한 행
			const newRow = arr[i - 1].filter((num, index) => index !== j);
			arr[i][j] = num + Math.max(...newRow);
		}
	}

	return Math.max(...arr[numRows - 1]);
}
