function solution(arr) {
  var answer = [...arr];
  let count = 0;
  while (1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 == 0) {
        arr[i] /= 2;
      } else if (arr[i] < 50 && arr[i] % 2 == 1) {
        arr[i] = arr[i] * 2 + 1;
      }
    }
    if (equl(answer, arr)) {
      break;
    }
    count++;
    answer = [...arr];
  }
  return count;
}

function equl(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
