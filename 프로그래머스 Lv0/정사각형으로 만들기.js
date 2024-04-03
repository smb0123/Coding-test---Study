function solution(arr) {
  var answer = [...arr];

  if (answer.length < answer[0].length) {
    for (let i = 0; i < answer[0].length - answer.length; i++) {
      arr.push(Array(answer[0].length).fill(0));
    }
  } else if (answer.length > answer[0].length) {
    for (let j = 0; j < answer.length; j++) {
      for (let i = 0; i < answer.length - answer[j].length; i++) {
        arr[j].push(0);
      }
    }
  }
  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
