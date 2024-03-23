function solution(number) {
  let answer = 0;
  for (let i of number) {
    answer += Number(i);
  }
  answer = answer % 9;
  return answer;
}
