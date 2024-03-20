function solution(box, n) {
  // 상자의 가로, 세로, 높이를 각각 나눈 후 그 곱을 계산하여 최대 주사위 개수를 구함
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}
