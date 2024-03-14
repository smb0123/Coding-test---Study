function solution(num_list) {
  var answer = 0;

  let sumX = 0;
  let numX = 1;

  for (let i = 0; i < num_list.length; i++) {
    sumX += num_list[i];
    numX *= num_list[i];
  }
  sumX *= sumX;
  sumX > numX ? (answer = 1) : (answer = 0);

  return answer;
}
