function solution(progresses, speeds) {
  let answer = [];
  for(let i = 0; i < progresses.length; i++) {
    let sum = progresses[i];
    let count = 0;
    while(sum < 100) {
      sum += speeds[i];
      count++;
    }
    answer.push(count);
  }
  let count = 1;
  let correct = [];
  let max = answer[0];
  for(let i = 1; i < answer.length; i++) {
    if(answer[i] <= max) {
      count++;
    } else {
      correct.push(count);
      count = 1;
      max = answer[i];
    }
  }
  correct.push(count);
  return correct;
}

console.log(solution([93, 30, 55], 	[1, 30, 5]));
