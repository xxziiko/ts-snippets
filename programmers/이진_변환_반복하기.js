// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const answer = [0, 0];
  let number = s;
  let stringLength = s.length;

  while (number > 1) {
    for (let i of number) i === "0" && answer[1]++;

    number = number.replaceAll("0", "");
    stringLength = number.length;
    number = stringLength.toString(2);
    answer[0] += 1;
  }

  return answer;
}
