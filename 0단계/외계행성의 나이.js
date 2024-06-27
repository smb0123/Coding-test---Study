function solution(age) {
  let answer = "";
  const ageSet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  let ageStr = String(age);

  for (let i = 0; i < ageStr.length; i++) {
    let a = ageStr[i];
    answer += ageSet[a];
  }
  return answer;
}
