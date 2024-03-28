function solution(a, d, included) {
  var answer = 0;
  let arr = [];
  let save = 0;

  for (let i = 0; i < included.length; i++) {
    if (i === 0) {
      arr[i] = a;
      save = arr[i];
    } else if (i > 0) {
      arr[i] = save + d;
      save = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (included[i]) {
      answer += arr[i];
    }
  }

  return answer;
}
