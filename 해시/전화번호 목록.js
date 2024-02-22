//효율성 테스트에서 일부 실패
// function solution(phone_book) {
//   for (let i = 0; i < phone_book.length; i++) {
//       for (let j = 0; j < phone_book.length; j++) {
//           if (i !== j && phone_book[j].startsWith(phone_book[i])) {
//               return false;
//           }
//       }
//   }
//   return true;
// }
//
//
//정렬을 통해서 미리 정리하고 false가 있다면 바로 리턴할 수 있도록
function solution(phone_book) {
  //정렬
  phone_book.sort();
  //특정 문자열로 시작하는지 검사
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}
