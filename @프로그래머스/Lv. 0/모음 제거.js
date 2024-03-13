// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// 2024-03-13
// 성공
function solution(my_string) {
  var answer = '';

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  answer = my_string;

  for (let i = 0; i < vowels.length; i++) {
    answer = answer.replaceAll(vowels[i], '');
  }

  return answer;
}
