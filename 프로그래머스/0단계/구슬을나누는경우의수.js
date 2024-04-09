function solution(balls, share) {
  if (share > balls) {
    return 0;
  }

  let answer = 1;
  for (let i = 1; i <= share; i++) {
    answer *= balls - i + 1;
    answer /= i;
  }

  return answer;
}
