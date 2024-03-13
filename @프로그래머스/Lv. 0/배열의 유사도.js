// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// 2024-03-13
function solution(s1, s2) {
  var answer = 0;

  s1.forEach((item1) => {
    answer += s2.filter((item2) => item2 === item1).length;
  });

  return answer;
}
