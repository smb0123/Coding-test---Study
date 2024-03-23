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

// 2024-03-22
// 성공
function solution(myString, pat) {
  var answer = 0;

  const count = {};
  const index = myString.indexOf(pat);
  for (let i = index; i < myString.length; i++) {
    const find = myString.indexOf(pat, i);
    if (find !== -1) {
      count[find] = 1;
    }
  }

  answer = Object.keys(count).length;

  return answer;
}
