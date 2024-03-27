function solution(before, after) {
  var answer = 0;
  const arr = [...after];
  for (let i of before) {
    if (arr.includes(i)) {
      arr.splice(arr.indexOf(i), 1);
    } else {
      break;
    }
  }
  answer = arr.length == 0 ? 1 : 0;
  return answer;
}
