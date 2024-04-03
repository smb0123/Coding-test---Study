function solution(sides) {
  var answer = 0;

  for (let i = 1; i < sides[0] + sides[1]; i++) {
    const arr = [...sides];
    arr.push(i);
    arr.sort((a, b) => a - b);
    if (arr[0] + arr[1] > arr[2]) {
      answer++;
    }
  }
  return answer;
}
