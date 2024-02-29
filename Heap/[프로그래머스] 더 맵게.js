// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// 2024-02-29
// 실패
// 정확성 테스트(26개) 모두 통과
// 효율성 테스트(5개) 모두 실패
function solution(scoville, K) {
  var answer = 0;

  scoville.sort((a, b) => a - b);

  while (scoville[0] < K && scoville.length > 1) {
    const mixScoville = scoville[0] + scoville[1] * 2;
    scoville.splice(0, 2, mixScoville);
    answer++;
    scoville.sort((a, b) => a - b);
  }

  if (scoville[0] < K) {
    answer = -1;
  }

  return answer;
}
