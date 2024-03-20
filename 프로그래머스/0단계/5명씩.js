function solution(names) {
  const result = [];
  let index = 0;

  while (index < names.length) {
    result.push(names[index]);
    index += 5;
  }

  return result;
}
