// https://school.programmers.co.kr/learn/courses/30/lessons/181890

// 2024-03-29
// 실패
function solution(str_list) {
  var answer = [];

  const indexL = str_list.indexOf('l');
  const indexR = str_list.indexOf('r');
  answer =
    indexL < indexR
      ? str_list.slice(0, indexL)
      : str_list.slice(indexR, str_list.length - 1);

  return answer;
}
