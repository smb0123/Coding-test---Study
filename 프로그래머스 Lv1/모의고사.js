function solution(arr) {
  var answer = [];
  let result = [];
  let num1 = [1, 2, 3, 4, 5];
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let num1_count = 0;
  let num2_count = 0;
  let num3_count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num1[i % 5]) {
      num1_count++;
    }
    if (arr[i] == num2[i % 8]) {
      num2_count++;
    }
    if (arr[i] == num3[i % 10]) {
      num3_count++;
    }
  }
  answer.push(num1_count);
  answer.push(num2_count);
  answer.push(num3_count);
  console.log(answer);
  let max = Math.max(...answer);
  for (let i = 0; i < answer.length; i++) {
    if (max == answer[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
