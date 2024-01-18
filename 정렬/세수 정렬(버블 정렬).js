// input.txt 파일에서 데이터 가져오기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

input = input.split(" ");

// 받아온 데이터를 array에 삽
const array = [];
for (let i = 0; i < input.length; i++) {
  array.push(+input[i]);
}

// 버블 정렬
for(let i = array.length; i > 1; i--) {
  for(let j = 0; j < i - 1; j++) {
    if(array[j] > array[j + 1]) {
      let change = array[j];
      array[j] = array[j + 1];
      array[j + 1] = change;
    }
  }
}

for (let i = 0; i < array.length; i++) {
  process.stdout.write(String(array[i] + " "));
}

