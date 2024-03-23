function solution(intStrs, k, s, l) {
  var answer = [];

  for (const str of intStrs) {
    const subStr = str.substring(s, s + l);
    const num = parseInt(subStr, 10);
    if (num > k) {
      answer.push(num);
    }
  }
  return answer;
}
