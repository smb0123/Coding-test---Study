function solution(price) {
  var answer = 0;

  if (price >= 500000) {
    answer = price - Math.floor(price / 5);
  } else if (price >= 300000) {
    answer = price - Math.floor(price / 10);
  } else if (price >= 100000) {
    answer = price - Math.floor(price / 20);
  } else {
    answer = price;
  }

  return answer;
}
