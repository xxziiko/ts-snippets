// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let n = 0;
  let m = 0;
  let GCD = 0;
  let result = 0;

  while (arr.length) {
    if (n === 0) n = arr.shift();
    else n = result;
    m = arr.shift();

    for (let i = 1; i <= m; i++) {
      if (n % i === 0 && m % i === 0) GCD = i;
    }

    result = (n * m) / GCD;
  }

  return result;
}
