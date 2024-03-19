// https://school.programmers.co.kr/learn/courses/30/lessons/181928

// 2024-03-19
// 성공
function solution(num_list) {
  var answer = 0;

  let odd = '';
  let even = '';

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      odd += num_list[i];
      continue;
    }
    even += num_list[i];
  }

  answer = Number(odd) + Number(even);

  return answer;
}
