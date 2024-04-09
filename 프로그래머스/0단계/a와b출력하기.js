const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printFormat(a, b) {
  console.log(`a = ${a}\nb = ${b}`);
}

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number);
  printFormat(input[0], input[1]);
  rl.close();
});
