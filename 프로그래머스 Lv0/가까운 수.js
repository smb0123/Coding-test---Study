function solution(array, n) {
  var answer = 0;
  array[array.length] = n;
  array.sort((a, b) => a - b);
  if (array[array.indexOf(n) - 1] === undefined) {
    answer = array[array.indexOf(n) + 1];
  } else if (array[array.indexOf(n) + 1] === undefined) {
    answer = array[array.indexOf(n) - 1];
  } else {
    let min = n - array[array.indexOf(n) - 1];
    if (min > array[array.indexOf(n) + 1] - n) {
      answer = array[array.indexOf(n) + 1];
    } else {
      answer = array[array.indexOf(n) - 1];
    }
  }
  return answer;
}
