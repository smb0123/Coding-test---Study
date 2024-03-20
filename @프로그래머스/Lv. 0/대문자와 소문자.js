// https://school.programmers.co.kr/learn/courses/30/lessons/120893

// 2024-03-20
// 성공
function solution(my_string) {
  var answer = '';

  for (let i = 0; i < my_string.length; i++) {
    let charCode = my_string.charCodeAt(i);
    charCode = charCode >= 97 ? charCode - 32 : charCode + 32;
    answer += String.fromCharCode(charCode);
  }

  return answer;
}
