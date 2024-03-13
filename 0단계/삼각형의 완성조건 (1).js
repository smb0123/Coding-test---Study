function solution(sides) {
  var answer = 0;

  sides.sort();
  answer = sides[0] + sides[1] > sides[2] ? 1 : 2;

  return answer;
}
