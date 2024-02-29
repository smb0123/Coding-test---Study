function solution(scoville, K) {
  var answer = 0;
  // 오름차순 정렬
  scoville.sort((a, b) => a - b);

  // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우 -1 리턴
  for (let i = 0; scoville[0] < K; i++) {
    if (scoville.length === 1 && scoville[o] < K) {
      return -1;
    }

    const mixScoville = scoville[0] + scoville[1] * 2;
    // 섞은 음식 배열에서 제거
    scoville.splice(0, 2);
    // 배열에 추가
    scoville.push(mixScoville);
    // 섞은 횟수 추가
    answer++;
    // 배열 다시 정렬
    scoville.sort((a, b) => a - b);
  }
  return answer;
}
