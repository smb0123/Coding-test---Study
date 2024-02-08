function solution(nums) {
  const set = [...new Set(nums)];
  const num = nums.length / 2;
  let result = num;
  if (set.length < num) {
    result = set.length;
  }
  return result;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
