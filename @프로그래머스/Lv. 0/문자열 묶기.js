// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 2024-03-26
// 성공
function solution(strArr) {
  var answer = 0;

  const arr = [];

  strArr.forEach((v) => {
    const length = v.length;
    arr[length] = (arr[length] || 0) + 1;
  });

  answer = Math.max(...arr.filter((v) => v));

  return answer;
}
