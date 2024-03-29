function solution(myStr) {
  const result = [];
  let currentString = "";

  for (let char of myStr) {
    if (char === "a" || char === "b" || char === "c") {
      if (currentString !== "") {
        result.push(currentString);
        currentString = "";
      }
    } else {
      currentString += char;
    }
  }

  // 마지막에 남은 문자열을 처리
  if (currentString !== "") {
    result.push(currentString);
  }

  // 결과 배열이 비어있다면 ["EMPTY"] 반환
  if (result.length === 0) {
    return ["EMPTY"];
  }

  return result;
}
