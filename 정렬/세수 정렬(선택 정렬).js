// input.txt 파일에서 데이터 가져오기
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

input = input.split(" ");

// 받아온 데이터를 array에 삽입
const array = [];
for (let i = 0; i < input.length; i++) {
  array.push(+input[i]);
}

// 선택 정렬
let maxIndex;
for(let i = array.length - 1; i > 0; i--) {
  maxIndex = i;
  for(let j = 0; j < i; j++) {
    if(array[j] > array[maxIndex]) {
      maxIndex = j;
    }
  }
  [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
}

for (let i = 0; i < array.length; i++) {
  process.stdout.write(String(array[i] + " "));
}

