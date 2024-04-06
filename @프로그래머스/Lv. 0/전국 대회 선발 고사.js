// https://school.programmers.co.kr/learn/courses/30/lessons/181851

// 2024-04-06
// 성공
function solution(rank, attendance) {
  var answer = 0;

  const attendTrue = rank.filter((_, i) => attendance[i]);
  attendTrue.sort((a, b) => a - b);
  const first = attendTrue[0];
  const second = attendTrue[1];
  const third = attendTrue[2];

  answer =
    10000 * rank.indexOf(first) +
    100 * rank.indexOf(second) +
    rank.indexOf(third);

  return answer;
}
