function solution(strArr) {
  const groupSizes = {};

  // 각 문자열의 길이를 기준으로 그룹의 개수를 세기
  for (let str of strArr) {
    const length = str.length;
    if (!groupSizes[length]) {
      groupSizes[length] = 1;
    } else {
      groupSizes[length]++;
    }
  }

  // 가장 많은 그룹의 크기 찾기
  let maxGroupSize = 0;
  for (let size in groupSizes) {
    maxGroupSize = Math.max(maxGroupSize, groupSizes[size]);
  }

  return maxGroupSize;
}
