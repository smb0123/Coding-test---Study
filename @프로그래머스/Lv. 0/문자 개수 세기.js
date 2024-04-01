// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 2024-03-29
// 성공
function solution(my_string) {
  var answer = [];

  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  answer = Array(alphabets.length * 2).fill(0);
  [...my_string].forEach((str) => {
    const isLowerCase = str === str.toLowerCase();
    const index = isLowerCase
      ? alphabets.indexOf(str.toUpperCase()) + alphabets.length
      : alphabets.indexOf(str);
    answer[index]++;
  });

  return answer;
}
