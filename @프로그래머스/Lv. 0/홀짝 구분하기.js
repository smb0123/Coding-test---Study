// https://school.programmers.co.kr/learn/courses/30/lessons/181944

// 2024-03-16
// 성공
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  const str = n % 2 === 0 ? ' is even' : ' is odd';
  console.log(n + str);
});
