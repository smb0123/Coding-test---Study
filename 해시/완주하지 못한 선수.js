function solution(participant, completion) {
  var answer = "";
  for (let i of participant) {
    const order = completion.indexOf(i);
    console.log(order);
    if (order !== -1) {
      completion.splice(order, 1);
      console.log(completion);
      continue;
    }
    answer = i;
    break;
  }
  return answer;
}

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
