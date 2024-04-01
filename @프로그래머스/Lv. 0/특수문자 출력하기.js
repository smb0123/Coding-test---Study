// https://school.programmers.co.kr/learn/courses/30/lessons/181948

// 2024-03-28
// 성공
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});
