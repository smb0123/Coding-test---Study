function solution(n) {
  var answer = 0;
  const arr = n.toString().split("");
  for (let i of arr) {
    answer += Number(i);
  }
  return answer;
}

solution(1234);
