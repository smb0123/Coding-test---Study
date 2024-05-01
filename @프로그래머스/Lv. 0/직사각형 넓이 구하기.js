// https://school.programmers.co.kr/learn/courses/30/lessons/120860

// 2024-04-06
// 성공
function solution(dots) {
  var answer = 0;

  const xArr = [];
  const yArr = [];

  for (let i = 0; i < dots.length; i++) {
    const [x, y] = dots[i];
    xArr.push(x);
    yArr.push(y);
  }

  const xMax = Math.max(...xArr);
  const xMin = Math.min(...xArr);
  const yMax = Math.max(...yArr);
  const yMin = Math.min(...yArr);

  answer = (xMax - xMin) * (yMax - yMin);

  return answer;
}
