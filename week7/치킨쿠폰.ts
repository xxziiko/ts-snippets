// https://school.programmers.co.kr/learn/courses/30/lessons/120884

const calculateMaxServiceChicken = (coupon: number): number => {
	const serviceCount = 10;
	if (coupon < serviceCount) return 0;

	const freeChicken = Math.floor(coupon / 10);
	const restCoupon = (coupon % serviceCount) + freeChicken;
	return Math.floor(coupon / 10) + calculateMaxServiceChicken(restCoupon);
};

function solution(chicken: number) {
	return calculateMaxServiceChicken(chicken);
}
