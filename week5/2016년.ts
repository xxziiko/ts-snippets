function solution(a: number, b: number) {
	const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const findIndex = new Date(2016, a - 1, b).getDay();

	return WEEKDAY[findIndex];
}
