const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const rotatedString = rotateString(str);
  rotatedString.forEach((char) => console.log(char));
});

function rotateString(str) {
  const rotated = [];
  for (let i = 0; i < str.length; i++) {
    rotated.push(str[i]);
  }
  return rotated;
}
