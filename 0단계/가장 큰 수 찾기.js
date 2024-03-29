function solution(array) {
  var answer = [];

  const copyArray = array.map((n) => n);

  copyArray.sort((a, b) => b - a);

  answer.push(copyArray[0]);
  answer.push(array.indexOf(copyArray[0]));
  return answer;
}
