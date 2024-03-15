// https://school.programmers.co.kr/learn/courses/30/lessons/181929

// 2024-03-15
// 성공
function solution(num_list) {
  var answer = 0;

  let sum = 0;
  let muliply = 1;

  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    muliply *= num_list[i];
  }

  answer = sum ** 2 > muliply ? 1 : 0;

  return answer;
}
