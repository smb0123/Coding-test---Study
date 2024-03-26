// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// 2024-03-26
// 성공
function solution(s) {
  var answer = 0;

  const arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Z') {
      answer -= Number(arr[i - 1]);
      continue;
    }
    answer += Number(arr[i]);
  }

  return answer;
}

// 2024-03-26
// 성공
function solution(s) {
  var answer = 0;

  const stack = [];

  s.split(' ').forEach((v) => {
    if (v === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(v));
    }
  });

  answer = stack.reduce((acc, curr) => acc + curr, 0);

  return answer;
}
