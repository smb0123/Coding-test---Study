function solution(wallpaper) {
  var answer = [];
  let min_x = 99;
  let min_y = 99;
  let max_x = -1;
  let max_y = -1;
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] == "#") {
        console.log(i, j);
        if (min_x > i) {
          min_x = i;
        }
        if (min_y > j) {
          min_y = j;
        }
        if (max_x < i) {
          max_x = i;
        }
        if (max_y < j) {
          max_y = j;
        }
      }
    }
  }
  answer.push(min_x, min_y, max_x + 1, max_y + 1);
  return answer;
}
console.log(solution([".#...", "..#..", "...#."]));
