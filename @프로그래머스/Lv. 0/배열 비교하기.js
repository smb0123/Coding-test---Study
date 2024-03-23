// https://school.programmers.co.kr/learn/courses/30/lessons/181856

// 2024-03-20
// 성공
function solution(arr1, arr2) {
  var answer = 0;

  if (arr1.length > arr2.length) {
    answer = 1;
    return answer;
  } else if (arr1.length < arr2.length) {
    answer = -1;
    return answer;
  }

  const arr1Sum = arr1.reduce((pre, curr) => pre + curr, 0);
  const arr2Sum = arr2.reduce((pre, curr) => pre + curr, 0);

  if (arr1Sum > arr2Sum) {
    answer = 1;
  } else if (arr1Sum < arr2Sum) {
    answer = -1;
  } else {
    answer = 0;
  }

  return answer;
}
