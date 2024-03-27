function solution(n, m, section) {
  var answer = 0;
  let paint = 0;
  for (let i of section) {
    if (paint < i) {
      answer++;
      paint = i + m - 1;
    }
  }
  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
