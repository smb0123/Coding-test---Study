function solution(myStr) {
  var answer = myStr.split(/[a|b|c]/g).filter((i) => i !== "");
  return answer.length ? answer : ["EMPTY"];
}
