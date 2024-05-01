// https://school.programmers.co.kr/learn/courses/30/lessons/181836

// 2024-04-02
// 성공
function solution(picture, k) {
  var answer = [];

  for (let i = 0; i < picture.length; i++) {
    picture[i] = [...picture[i]].map((v) => v.repeat(k)).join('');
    for (let j = 0; j < k; j++) {
      answer.push(picture[i]);
    }
  }

  return answer;
}
