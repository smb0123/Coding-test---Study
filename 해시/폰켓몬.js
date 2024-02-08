function solution(nums) {
  const set = [...new Set(nums)];
  const num = nums.length / 2;
  return set.length < num ? set.length : num;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
