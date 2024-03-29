function solution(my_string, s, e) {
  const arr = [...my_string];

  const arr2 = arr.slice(s, e + 1).reverse();
  arr.splice(s, arr2.length, arr2);
  const array = arr.flat();
  return array.join("");
}
