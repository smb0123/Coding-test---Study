function solution(num_list) {
  let number = 0;
  const arrayLength = num_list.length;

  if (arrayLength >= 11) {
    for (let i = 0; i < arrayLength; i++) {
      number += num_list[i];
    }
  } else {
    number = 1;
    for (let i = 0; i < arrayLength; i++) {
      number *= num_list[i];
    }
  }
  return number;
}
