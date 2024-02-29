function solution(scoville, K) {
  var answer = 0;

  while (1) {
    scoville.sort((a, b) => a - b);
    if (scoville[0] >= K) {
      break;
    }
    let mix = scoville[0] + scoville[1] * 2;
    scoville.shift();
    scoville.shift();
    scoville.unshift(mix);
    answer++;
  }
  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
