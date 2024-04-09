function solution(keyinput, board) {
  let position = [0, 0];
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);

  keyinput.forEach((key) => {
    switch (key) {
      case "up":
        if (position[1] < maxY) position[1] += 1;
        break;
      case "down":
        if (position[1] > -maxY) position[1] -= 1;
        break;
      case "left":
        if (position[0] > -maxX) position[0] -= 1;
        break;
      case "right":
        if (position[0] < maxX) position[0] += 1;
        break;
    }
  });

  return position;
}
