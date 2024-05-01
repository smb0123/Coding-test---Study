// https://school.programmers.co.kr/learn/courses/30/lessons/120871

// 2024-04-06
// 성공
function solution(n) {
  var answer = 0;

  const nums = [];
  let i = 0;
  while (nums.length - 1 <= 100) {
    i++;
    if (i % 3 === 0 || String(i).includes('3')) continue;
    nums.push(i);
  }

  answer = nums[n - 1];

  return answer;
}

// 2024-04-06
// 성공
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || String(i).includes('3')) {
      n++;
    }
  }

  answer = n;

  return answer;
}
