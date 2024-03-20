// https://school.programmers.co.kr/learn/courses/30/lessons/181864

// 2024-03-21
// 성공
function solution(myString, pat) {
  var answer = 0;

  const reverse = [...myString]
    .map((str) => (str === 'A' ? 'B' : 'A'))
    .join('');
  answer = Number(reverse.includes(pat));

  return answer;
}
