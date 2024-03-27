function solution(cards1, cards2, goal) {
  var answer = "";
  const arr = [...goal];
  for (let i of arr) {
    if (cards1[0] == i) {
      goal.shift();
      cards1.shift();
    }
    if (cards2[0] == i) {
      goal.shift();
      cards2.shift();
    }
  }
  if (goal.length == 0) {
    answer = "Yes";
  } else {
    answer = "No";
  }
  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
