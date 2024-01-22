function solution(numbers) {
  const output = [];
  const result = [];
  const permutation = (permu, numbers, output) => {
      if (numbers.length == 0) {
          return output.push(permu);
      }
  numbers.forEach((v,idx) => {
      const rest = [...numbers.slice(0,idx), ...numbers.slice(idx+1)]
      permutation([...permu,v], rest, output);
      })
  }
  permutation([], numbers, output);

  for(let i = 0; i < output.length; i++) {
    let answer = '';
      for(let j of output[i]) {
          answer += j;
      }
      result.push(Number(answer));
  }
  
  let max = result[0];
  
  for(let i = 1; i < result.length ; i++) {
    if(result[i] > max) {
      max = result[i];
    }
  }
  
  return String(max);
  
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));