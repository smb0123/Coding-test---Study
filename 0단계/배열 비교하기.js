function solution(arr1, arr2) {
  var answer = 0;
  let arr1Sum = 0;
  let arr2Sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    arr1Sum += arr1[i];
    arr2Sum += arr2[i];
  }

  if (arr1.length !== arr2.length) {
    answer = arr1.length > arr2.length ? 1 : -1;
  } else {
    if (arr1Sum === arr2Sum) {
      answer = 0;
    } else if (arr1Sum > arr2Sum) {
      answer = 1;
    } else {
      answer = -1;
    }
  }

  return answer;
}
