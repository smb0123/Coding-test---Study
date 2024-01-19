// ## 문제
// 동규는 세수를 하다가 정렬이 하고 싶어졌다.
// 정수 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어졌다.
// 정수 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.
// ## 입력
// 정수 세 개가 주어진다. 이 수는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 수는 모두 다르다.
// ## 출력
// 제일 작은 수, 그 다음 수, 제일 큰 수를 차례대로 출력한다.

//선택 정렬
const fs = require("fs");
let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
// 코드 제출 시 let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number); 로 바꿔주세요

function solution() {
  // 여기에 코드를 작성하면 됩니다.
  for(i = input.length -1 ; i >= 0 ; i--) {
    //가장 큰 수를 찾아 뒤로 보냄
    let maxIndex = 0;
    for(j = 1 ; j <= i ; j++) {
      //큰수 찾기
      if(input[maxIndex] < input[j]){
        maxIndex = j;
      }
    }
    // 교체
    if(maxIndex != i) {
      [input[i], input[maxIndex]] = [input[maxIndex], input[i]];
    }
  }
  //순서대로 출력
  console.log(input[0], input[1], input[2]);
 }
 
 solution()
 