// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial: string) {
	let sumCoefficientOfX = 0;
	let sumConstant = 0;

	const terms = polynomial.split("+");

	for (const term of terms) {
		if (term.includes("x")) {
			sumCoefficientOfX += Number(term.replace("x", "")) || 1;
		} else sumConstant += Number(term);
	}

	let result = "";

	if (sumCoefficientOfX !== 0) {
		result += sumCoefficientOfX === 1 ? "x" : `${sumCoefficientOfX}x`;
	}

	if (sumConstant !== 0) {
		if (result) result += " + ";

		result += sumConstant;
	}

	return result;
}
