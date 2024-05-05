// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  B.sort((a, b) => a - b);

  return A.sort((a, b) => b - a).reduce(
    (acc, cur, index) => acc + cur * B[index],
    0
  );
}
