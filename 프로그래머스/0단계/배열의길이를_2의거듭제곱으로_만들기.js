function solution(arr) {
  const length = arr.length;
  let targetLength = 1;

  // 주어진 배열의 길이가 2의 정수 거듭제곱이 될 때까지 반복
  while (targetLength < length) {
    targetLength *= 2;
  }

  // 0을 추가할 총 길이 계산
  const newLength = targetLength;

  // 0을 추가한 배열 생성
  const result = arr.concat(Array(newLength - length).fill(0));

  return result;
}
