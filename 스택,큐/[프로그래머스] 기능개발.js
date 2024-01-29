// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 2024-01-29
function solution(progresses, speeds) {
  var answer = [];

  const dateArr = progresses.map((item, index) => {
    return Math.ceil((100 - item) / speeds[index]);
  });

  let count = 1;
  let temp = dateArr[0];
  for (let i = 1; i < dateArr.length; i++) {
    if (temp >= dateArr[i]) {
      count++;
      continue;
    }
    answer.push(count);
    count = 1;
    temp = dateArr[i];
  }

  answer.push(count);

  return answer;
}
