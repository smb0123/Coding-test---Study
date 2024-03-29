function solution(n) {
  const answer = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  // 중복된 소수 제거
  const uniqueAnswer = Array.from(new Set(answer));
  return uniqueAnswer;
}
