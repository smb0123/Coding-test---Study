function solution(picture, k) {
  const answer = [];
  for (let i = 0; i < picture.length; i++) {
    const row = picture[i];
    const enlargedRow = row
      .split("")
      .map((char) => char.repeat(k))
      .join("");
    for (let j = 0; j < k; j++) {
      answer.push(enlargedRow);
    }
  }
  return answer;
}
