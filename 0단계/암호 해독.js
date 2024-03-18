function solution(cipher, code) {
  var answer = "";

  for (let i = 0; i < cipher.length + 1; i++) {
    if (i % code === 0 && i !== 0) {
      answer += cipher[i - 1];
    }
  }

  return answer;
}
