// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 2024-02-14
// 1차 풀이
function solution(participant, completion) {
  var answer = '';

  const map = new Map();

  participant.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  completion.forEach((item) => {
    map.set(item, (map.get(item) || 0) - 1);
  });

  for (const [key, value] of map) {
    if (value >= 1) {
      answer = key;
      break;
    }
  }

  return answer;
}

// 2024-02-14
// 2차 풀이
// 다른 사람 풀이 확인
function solution(participant, completion) {
  var answer = '';

  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    const p = participant[i];
    const c = completion[i];

    map.set(p, (map.get(p) || 0) + 1);
    map.set(c, (map.get(c) || 0) - 1);
  }

  for (const [key, value] of map) {
    if (value > 0) {
      answer = key;
      break;
    }
  }

  return answer;
}
