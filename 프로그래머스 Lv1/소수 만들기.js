function solution(nums) {
  var answer = 0;
  let arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  console.log(arr);
  for (let i of arr) {
    if (sosu(i)) {
      answer++;
    }
  }
  return answer;
}
function sosu(num) {
  for (let j = 2; j <= num ** 0.5; j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
}
console.log(solution([1, 2, 3, 4]));
