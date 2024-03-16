function solution(arr1, arr2) {
  var answer = 0;
  let arr1Sum = 0;
  let arr2Sum = 0;
  if (arr1.length === arr2.length) {
    for (let i of arr1) {
      arr1Sum += i;
    }
    for (let i of arr2) {
      arr2Sum += i;
    }
    if (arr1Sum > arr2Sum) {
      answer = 1;
    }
    if (arr1Sum < arr2Sum) {
      answer = -1;
    }
    if (arr1Sum == arr2Sum) {
      answer = 0;
    }
  }
  if (arr1.length > arr2.length) {
    answer = 1;
  }
  if (arr1.length < arr2.length) {
    answer = -1;
  }
  return answer;
}
