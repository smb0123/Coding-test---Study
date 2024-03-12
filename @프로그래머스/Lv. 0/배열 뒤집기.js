// https://school.programmers.co.kr/learn/courses/30/lessons/120821

// 2024-03-12
function solution(num_list) {
  var answer = [];

  num_list.forEach((num) => {
    answer.unshift(num);
  });

  return answer;
}
