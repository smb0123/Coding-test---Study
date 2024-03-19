// https://school.programmers.co.kr/learn/courses/30/lessons/181927

// 2024-03-18
// 성공
function solution(num_list) {
  var answer = [];

  answer = [...num_list];

  const length = num_list.length;

  if (num_list[length - 1] > num_list[length - 2]) {
    answer.push(num_list[length - 1] - num_list[length - 2]);
  } else {
    answer.push(num_list[length - 1] * 2);
  }

  return answer;
}

// 2024-03-18
// 성공
function solution(num_list) {
  var answer = [];

  const [a, b] = num_list.slice(-2);

  answer = [...num_list, b > a ? b - a : b * 2];

  return answer;
}
