// https://school.programmers.co.kr/learn/courses/30/lessons/181913

// 2024-03-31
// 성공
function solution(my_string, queries) {
  var answer = '';

  const my_arr = [...my_string];
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    const reverse = my_arr.slice(s, e + 1).reverse();
    my_arr.splice(s, reverse.length, ...reverse);
  }

  answer = my_arr.join('');

  return answer;
}
