function solution(s) {
  const count = {};

  // 문자열에서 각 문자의 등장 횟수를 계산
  for (let alp of s) {
    if (count[alp]) {
      count[alp]++;
    } else {
      count[alp] = 1;
    }
  }

  let result = "";

  // 등장 횟수가 1인 문자를 찾아 결과에 추가
  for (let num in count) {
    if (count[num] === 1) {
      result += num;
    }
  }

  // 등장 횟수가 1인 문자들을 사전 순으로 정렬
  result = result.split("").sort().join("");

  return result;
}
