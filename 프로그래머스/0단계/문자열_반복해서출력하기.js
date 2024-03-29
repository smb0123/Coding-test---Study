const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const str = input[0];
  const n = Number(input[1]);

  // 문자열 str을 n번 반복하여 출력
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
});
