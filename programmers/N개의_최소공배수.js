// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

console.log(nlcm([2, 6, 8, 14]));
