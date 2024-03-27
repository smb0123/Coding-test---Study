function solution(emergency) {
  var answer = [...emergency];
  const obj = {};
  let result;
  answer.sort((a, b) => b - a);

  answer.forEach((item, idx) => (obj[item] = idx + 1));
  result = emergency.map((item) => obj[item]);
  return result;
}
