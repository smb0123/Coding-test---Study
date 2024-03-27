function solution(dartResult) {
  var answer = 0;
  const arr = [];
  let num = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
      num = 10;
      i++;
    } else if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      num = dartResult[i];
    } else if (dartResult[i] == "S") {
      arr.push(num);
    } else if (dartResult[i] == "D") {
      arr.push(num ** 2);
    } else if (dartResult[i] == "T") {
      arr.push(num ** 3);
    } else if (dartResult[i] == "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      arr[arr.length - 1] *= -1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  return answer;
}

console.log(solution("1S*2T*3S"));
