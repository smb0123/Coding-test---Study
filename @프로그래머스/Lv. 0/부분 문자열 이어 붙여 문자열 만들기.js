// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// 2024-03-21
// 성공
function solution(my_strings, parts) {
  var answer = '';

  answer += my_strings.reduce((pre, curr, idx) => {
    const [s, e] = parts[idx];
    return pre + curr.slice(s, e + 1);
  }, '');

  return answer;
}
