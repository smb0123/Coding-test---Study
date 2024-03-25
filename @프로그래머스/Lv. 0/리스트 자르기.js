// https://school.programmers.co.kr/learn/courses/30/lessons/181897

// 2024-03-25
// 실패
function solution(n, slicer, num_list) {
  var answer = [];

  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      answer = num_list.slice(0, b);
      break;
    case 2:
      answer = num_list.slice(a);
      break;
    case 3:
      answer = num_list.slice(a, b + 1);
      break;
    case 4:
      answer = num_list.slice(a, b + 1).filter((v, i) => i % c === 0);
      break;
  }

  return answer;
}
