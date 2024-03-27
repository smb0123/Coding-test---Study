function solution(s) {
  var answer = "";
  let obj = {};

  for (let i of s) {
    if (obj[i] === undefined) {
      obj[i] = 0;
    } else {
      obj[i]++;
    }
  }
  Object.keys(obj).forEach((key) => {
    if (obj[key] === 0) {
      answer += key;
    }
  });
  answer = answer.split("").sort().join("");
  return answer;
}
