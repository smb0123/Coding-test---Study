function solution(rsp) {
  var answer = "";
  const Win = {
    2: "0",
    0: "5",
    5: "2",
  };

  for (let i = 0; i < rsp.length; i++) {
    answer += Win[rsp[i]];
  }

  return answer;
}
