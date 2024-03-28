function solution(a, d, included) {
  var answer = 0;
  let arr = [];
  let save = 0;

  for (let i = 0; i < included.length; i++) {
    arr.push(a);
    a = a + d;
  }

  for (let i = 0; i < arr.length; i++) {
    if (included[i]) {
      answer += arr[i];
    }
  }

  return answer;
}
