// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const fibonacciNumber = (num) => {
    if (num <= 1) return num;
    return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
  };

  return fibonacciNumber(n);
}

console.log(solution(4));
