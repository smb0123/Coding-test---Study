// https://school.programmers.co.kr/learn/courses/30/lessons/181945

// 2024-03-21
// 성공
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
});
