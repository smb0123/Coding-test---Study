// https://school.programmers.co.kr/learn/courses/30/lessons/181887

// 2024-03-20
// 성공
function solution(num_list) {
  var answer = 0;

  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < num_list.length; i++) {
    if ((i + 1) % 2 === 1) {
      sumOdd += num_list[i];
      continue;
    }
    sumEven += num_list[i];
  }

  answer = sumOdd >= sumEven ? sumOdd : sumEven;

  return answer;
}
