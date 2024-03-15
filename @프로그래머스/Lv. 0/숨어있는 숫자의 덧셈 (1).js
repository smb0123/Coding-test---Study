// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 2024-03-15
// 성공
function solution(my_string) {
  var answer = 0;

  answer = [...my_string].reduce((pre, curr) => {
    const parseNumber = Number(curr);
    if (Number.isInteger(parseNumber)) return pre + parseNumber;
    return pre;
  }, 0);

  return answer;
}
