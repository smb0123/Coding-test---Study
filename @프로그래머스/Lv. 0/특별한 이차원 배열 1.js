// https://school.programmers.co.kr/learn/courses/30/lessons/181833

// 2024-03-21
// 성공
function solution(n) {
  var answer = [[]];

  answer = Array(n)
    .fill()
    .map((_, idx) => {
      const arr = Array(n).fill(0);
      arr[idx] = 1;
      return arr;
    });

  return answer;
}

// 2024-03-21
// 성공
function solution(n) {
  var answer = [[]];

  answer = Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill(0)
        .map((num, idx) => (i === idx ? ++num : num))
    );

  return answer;
}
