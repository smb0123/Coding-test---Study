function solution(n, arr1, arr2) {
  var answer = [];
  let Arr1 = [];
  let Arr2 = [];
  for (let i of arr1) {
    let str = "";
    let change = i;
    for (let j = n - 1; j >= 0; j--) {
      str += Math.floor(change / 2 ** j);
      change = change % 2 ** j;
    }
    Arr1.push(str);
  }
  for (let i of arr2) {
    let str = "";
    let change = i;
    for (let j = n - 1; j >= 0; j--) {
      str += Math.floor(change / 2 ** j);
      change = change % 2 ** j;
    }
    Arr2.push(str);
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (Arr1[i][j] == "1" || Arr2[i][j] == "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
