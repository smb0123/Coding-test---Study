function solution(my_string) {
  var answer = "";
  answer = my_string.split("").reverse().join("");
  return answer;
}
console.log(solution("jaron"));

// reverse() 메서드는 배열의 순서를 반전합니다.
