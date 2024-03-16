function solution(arr, idx) {
  var answer = 0;
  let spl = arr.splice(idx);
  if (spl.includes(1)) {
    answer = arr.length + spl.indexOf(1);
  } else {
    answer = -1;
  }

  return answer;
}
