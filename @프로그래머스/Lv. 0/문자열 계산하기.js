// https://school.programmers.co.kr/learn/courses/30/lessons/120902

// 2024-03-29
// 실패
function solution(my_string) {
  var answer = 0;

  my_string = my_string.replaceAll(' ', '');
  let expression = '+';
  answer = [...my_string].reduce((acc, curr) => {
    if (!Number.isInteger(Number(curr))) {
      expression = curr;
      return acc;
    }
    if (expression === '+') {
      return acc + Number(curr);
    } else {
      return acc - Number(curr);
    }
  }, 0);

  return answer;
}

// 2024-03-29
// 성공
function solution(my_string) {
  var answer = 0;

  function calculator(a, b, op) {
    switch (op) {
      case '+':
        return a + Number(b);
      case '-':
        return a - Number(b);
    }
  }

  const my_arr = my_string.split(' ');
  let operator = '+';
  answer = my_arr.reduce((acc, curr) => {
    if (!Number.isInteger(Number(curr))) {
      operator = curr;
      return acc;
    }
    return calculator(acc, curr, operator);
  }, 0);

  return answer;
}
