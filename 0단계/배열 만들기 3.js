function solution(arr, intervals) {
  var answer = [];

  for (let i = 0; i < intervals.length; i++) {
    let [first, last] = intervals[i];
    answer.push(...arr.slice(first, last + 1));
  }

  return answer;
}
