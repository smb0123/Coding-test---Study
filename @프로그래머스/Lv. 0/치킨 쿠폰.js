// https://school.programmers.co.kr/learn/courses/30/lessons/120884

// 2024-04-06
// 성공
function solution(chicken) {
  var answer = 0;

  let coupon = chicken;
  while (coupon >= 10) {
    coupon -= 10;
    coupon++;
    answer++;
  }

  return answer;
}

// 2024-04-06
// 성공
function solution(chicken) {
  var answer = 0;

  let coupon = chicken;
  while (coupon >= 10) {
    answer += Math.trunc(coupon / 10);
    coupon = Math.trunc(coupon / 10) + (coupon % 10);
  }

  return answer;
}
