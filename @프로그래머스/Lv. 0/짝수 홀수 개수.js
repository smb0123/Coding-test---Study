// https://school.programmers.co.kr/learn/courses/30/lessons/120824

// 2024-03-13
function solution(num_list) {
  var answer = [];

  let evenCnt = 0;
  let oddCnt = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evenCnt++;
      continue;
    }
    oddCnt++;
  }

  answer.push(evenCnt);
  answer.push(oddCnt);

  return answer;
}
