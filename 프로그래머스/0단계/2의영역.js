function solution(arr) {
  let startIdx = -1;
  let endIdx = -1;

  // 배열에서 2가 포함된 가장 작은 연속된 부분 배열의 시작과 끝 인덱스 찾기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      if (startIdx === -1) {
        startIdx = i;
      }
      endIdx = i;
    }
  }

  // 2가 없는 경우
  if (startIdx === -1) {
    return [-1];
  }

  // 가장 작은 연속된 부분 배열 반환
  return arr.slice(startIdx, endIdx + 1);
}
