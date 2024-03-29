function solution(arr) {
  var answer = 0;
  var isEqual = false;

  while (!isEqual) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (num >= 50 && num % 2 === 0) {
        newArr.push(num / 2);
      } else if (num < 50 && num % 2 !== 0) {
        newArr.push(num * 2 + 1);
      } else {
        newArr.push(num);
      }
    }

    isEqual = true;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] !== newArr[j]) {
        isEqual = false;
        break;
      }
    }

    if (!isEqual) {
      arr = newArr;
      answer++;
    }
  }

  return answer;
}
