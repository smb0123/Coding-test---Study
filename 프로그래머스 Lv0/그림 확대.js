function solution(picture, k) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < picture.length; i++) {
    picture[i] = picture[i].split("");
    for (let j = 0; j < picture[i].length; j++) {
      arr = picture[i][j];
      for (let z = 0; z < k - 1; z++) {
        picture[i][j] += arr;
      }
    }
    picture[i] = picture[i].join("");
  }
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(picture[i]);
    }
  }
  return answer;
}

console.log(solution(["x.x", ".x.", "x.x"], 3));
