function solution(arr) {
  while (powerOfTwo(arr.length) === false) {
    console.log(arr.length);
    arr.push(0);
  }
  return arr;
}

function powerOfTwo(num) {
  if (num & (num - 1)) return false;
  else return true;
}
