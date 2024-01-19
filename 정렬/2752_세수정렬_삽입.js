// ## 문제
// 동규는 세수를 하다가 정렬이 하고 싶어졌다.
// 정수 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어졌다.
// 정수 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.
// ## 입력
// 정수 세 개가 주어진다. 이 수는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 수는 모두 다르다.
// ## 출력
// 제일 작은 수, 그 다음 수, 제일 큰 수를 차례대로 출력한다.

//삽입 정렬
const fs = require("fs");
let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
// 코드 제출 시 let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number); 로 바꿔주세요

function solution() {
  // 여기에 코드를 작성하면 됩니다.
  for(i = 1 ; i < input.length ; i++) {
    //현재 수 저장
    let current = input[i];
    let j
    // 현재 수를 비교해 위치를 찾아간다
    for (j = i - 1; j >= 0 && input[j] > current; j--) {
      input[j + 1] = input[j];
    }
    //현재 수를 위치에 삽입
    input[j+1] =current;

  }
  //순서대로 출력
  console.log(input[0], input[1], input[2]);
 }
 
 solution()