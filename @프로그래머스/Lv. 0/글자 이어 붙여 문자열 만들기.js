// https://school.programmers.co.kr/learn/courses/30/lessons/181915

// 2024-03-20
// 성공
function solution(my_string, index_list) {
  var answer = '';

  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }

  return answer;
}
