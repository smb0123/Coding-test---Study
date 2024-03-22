function solution(array, n) {
  let num = array[0];
  let abs = Math.abs(array[0] - n);

  for (let i = 1; i < array.length; i++) {
    let current = Math.abs(array[i] - n);

    if (current < abs || (current === abs && array[i] < num)) {
      num = array[i];
      abs = current;
    }
  }

  return num;
}
