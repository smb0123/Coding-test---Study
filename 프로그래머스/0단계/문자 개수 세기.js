function solution(my_string) {
  // 알파벳 대소문자에 대한 빈도를 저장할 배열 초기화
  const frequency = new Array(52).fill(0);

  // 주어진 문자열을 순회하며 각 문자의 빈도 계산
  // 문자열의 특정 인덱스에 위치한 문자의 UTF-16 코드를 나타내는 숫자를 반환하는 메소드입니다.
  for (const char of my_string) {
    const charCode = char.charCodeAt(0);

    // 대문자인 경우
    if (charCode >= 65 && charCode <= 90) {
      frequency[charCode - 65]++;
    }
    // 소문자인 경우
    else if (charCode >= 97 && charCode <= 122) {
      frequency[charCode - 71]++; // 'a'의 charCode가 97이므로, 97 - 71 = 26부터 시작
    }
  }

  return frequency;
}

function solution(my_string) {
  // 알파벳 대소문자 배열 정의
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

  // 알파벳 빈도를 저장할 배열 초기화
  const frequency = new Array(52).fill(0);

  // 주어진 문자열을 순회하며 각 문자의 빈도 계산
  for (const char of my_string) {
    let index;

    // 대문자인 경우
    if (upperCaseLetters.includes(char)) {
      index = upperCaseLetters.indexOf(char);
      frequency[index]++;
    }
    // 소문자인 경우
    else if (lowerCaseLetters.includes(char)) {
      index = 26 + lowerCaseLetters.indexOf(char); // 소문자는 26부터 시작
      frequency[index]++;
    }
  }

  return frequency;
}
