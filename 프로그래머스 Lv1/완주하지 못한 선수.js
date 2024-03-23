function solution(participant, completion) {
  var answer = "";
  const obj = {};
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] in obj) {
      obj[participant[i]]++;
    } else {
      obj[participant[i]] = 1;
    }
  }
  for (let i of completion) {
    obj[i]--;
    if (obj[i] == 0) {
      delete obj[i];
    }
  }
  for (let i in obj) {
    answer = i;
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
