// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 2024-02-18
// 1차 시도
// 실패(정확성 테스트(8, 9, 19) 실패 + 효율성 테스트(3, 4) 시간 초과)
function solution(phone_book) {
  var answer = true;

  outer: for (let i = 0; i < phone_book.length; i++) {
    const phone = phone_book[i];
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].indexOf(phone) === 0) {
        answer = false;
        break outer;
      }
    }
  }

  return answer;
}

// 2024-02-18
// 2차 시도(풀이 참고)
// 성공
function solution(phone_book) {
  var answer = true;

  phone_book.sort();

  answer = !phone_book.some((phone, index) =>
    phone_book[index + 1]?.startsWith(phone)
  );

  return answer;
}
