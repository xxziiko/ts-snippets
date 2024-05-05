// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++)
    // 오버플로우가 일어나지 않게 모든 단계에서 나누기
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;

  return fibonacci[n];
}
