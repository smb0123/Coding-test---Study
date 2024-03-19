// https://school.programmers.co.kr/learn/courses/30/lessons/181861

// 2024-03-19
// 성공
function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 2024-03-19
// 성공2
function solution(arr) {
  var answer = [];

  answer = arr.reduce((list, curr) => [...list, ...Array(curr).fill(curr)], []);

  return answer;
}
