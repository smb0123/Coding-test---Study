// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// 2024-03-21
// 성공
function solution(binomial) {
  var answer = 0;

  const calculator = (a, op, b) => {
    switch (op) {
      case '+':
        return Number(a) + Number(b);
      case '-':
        return Number(a) - Number(b);
      case '*':
        return Number(a) * Number(b);
    }
  };

  answer = calculator(...binomial.split(' '));

  return answer;
}
