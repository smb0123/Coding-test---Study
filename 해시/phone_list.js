function solution(phone_book) {
  var answer = true;
  const book_length = phone_book.length; // 반복문에서 이용할 phone_book의 길이
  phone_book.sort(); // phone_book 정렬 (길이가 짧은 애들 앞으로)

  for (let i = 0; i < book_length; i++) {
    let prefixLength = phone_book[i].length; //접두사가 되는지 확인할 번호의 길이

    if (phone_book[i] === phone_book[i + 1].substring(0, prefixLength)) {
      return false;
    }
  }
  return answer;
}
