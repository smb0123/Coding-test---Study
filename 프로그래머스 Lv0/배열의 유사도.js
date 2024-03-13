function solution(s1, s2) {
  var answer = 0;
  if (s1.length <= s2.length) {
    for (let i of s1) {
      if (s2.includes(i)) {
        answer++;
      }
    }
  } else {
    for (let i of s2) {
      if (s1.includes(i)) {
        answer++;
      }
    }
  }
  return answer;
}

// in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환합니다.
