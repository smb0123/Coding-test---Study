function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => {
    return a - b;
  });
  let max = citations.at(-1);
  while(answer <= max){
    let num = 0;
    for(let i = 0; i < citations.length; i++) {
      if(answer <= citations[i]) {
        num++;
      }
    }
    if(num < answer) {
      break;
    }
    answer++;

  }
  return answer - 1;
}
console.log(solution([3, 0, 6, 1, 5, 2]));