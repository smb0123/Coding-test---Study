function solution(q, r, code) {
  var answer = "";
  // 나눈값이니까 q씩 더하면 됨
  for (let i = r; i < code.length; i += q) {
    answer += code[i];
  }
  return answer;
}
