// https://school.programmers.co.kr/learn/courses/30/lessons/181879

// 2024-03-18
// 성공
function solution(num_list) {
  var answer = 0;

  const length = num_list.length;
  answer = num_list.reduce((pre, curr) => {
    if (length >= 11) return pre + curr;
    return pre * curr;
  });

  return answer;
}
