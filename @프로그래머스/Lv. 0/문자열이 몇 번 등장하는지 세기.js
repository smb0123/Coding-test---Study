// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// 2024-03-22
// 실패
function solution(myString, pat) {
  var answer = 0;

  const index = myString.indexOf(pat);
  for (let i = index; i < myString.length; i += pat.length - 1) {
    if (myString.indexOf(pat, i) !== -1) {
      answer++;
    }
  }

  return answer;
}
