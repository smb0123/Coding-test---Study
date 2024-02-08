// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 2024-02-08
/*
  1. 원본 배열의 중복을 제거한다.
  2. 원본 배열의 수를 2로 나누어 뽑을 수 있는 최대 수를 정한다.
  3. 뽑을 수 있는 수가 중복을 제거한 배열의 수보다 작을 경우 뽑을 수 있는 수를 return 한다.
  4. 그 외에는 중복을 제거한 배열의 수를 return 한다.
*/
function solution(nums) {
  var answer = 0;

  const numsDistinct = [...new Set(nums)];
  const numsDistinctLength = numsDistinct.length;
  const numsLength = nums.length;
  const pick = numsLength / 2;

  answer = pick < numsDistinctLength ? pick : numsDistinctLength;

  return answer;
}
