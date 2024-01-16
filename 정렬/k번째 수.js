function solution(array, commands) {
  let answer = [];
  for (let i of commands){
      let selected_array;
      selected_array = array.slice(i[0] - 1, i[1]);
      selected_array = selected_array.sort(function (a, b) {
          return a - b;
      })
      answer.push(selected_array[i[2] - 1]);
  }
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));