function solution(my_string) {
  var answer = [];
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    answer.push(+my_string[i]);
  }

  let arr = answer.map((el) => el + "");
  let arr2 = arr.join("");
  let arr3 = arr2.split("NaN");
  for (let i = 0; i < arr3.length; i++) {
    result += +arr3[i];
  }

  return result;
}
