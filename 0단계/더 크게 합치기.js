function solution(a, b) {
  var answer = 0;
  let ab = +(a + "" + b);
  let ba = +(b + "" + a);

  answer = ab < ba ? ba : ab;

  return answer;
}
