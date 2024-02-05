function solution(s){
  var answer = true;
  const arr = [];
  for(let i of s) {
    if(i === '(') {
      arr.push(i);
      continue;
    }
    if(arr.includes('(')) {
      arr.pop();
      continue;
    }
    answer = false;
    break;
  }
  if(arr.length != 0) {
    answer = false;
  }
  return answer;
}

console.log(solution("(()("));