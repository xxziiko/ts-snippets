// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken: number): number {
	const serviceCount = 10;
	if (chicken < serviceCount) return 0;

	const freeChicken = Math.floor(chicken / 10);
	const restCoupon = (chicken % serviceCount) + freeChicken;
	return Math.floor(chicken / 10) + solution(restCoupon);
}
