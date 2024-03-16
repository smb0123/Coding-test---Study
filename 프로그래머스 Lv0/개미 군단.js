function solution(hp) {
  var first = Math.floor(hp / 5);
  let second = Math.floor((hp % 5) / 3);
  let third = Math.floor((hp % 5) % 3);
  let answer = first + second + third;
  return answer;
}
