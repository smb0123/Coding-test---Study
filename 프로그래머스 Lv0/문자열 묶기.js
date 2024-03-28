function solution(strArr) {
  var answer = {};
  for (let i of strArr) {
    if (answer[i.length] === undefined) {
      answer[i.length] = 1;
    } else {
      answer[i.length]++;
    }
  }
  let max = 0;
  const keys = Object.keys(answer);
  for (let i = 0; i < keys.length; i++) {
    if (answer[keys[i]] > max) {
      max = answer[keys[i]];
    }
  }

  return max;
}
