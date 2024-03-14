function solution(num_list) {
  let odd = [];
  let even = [];

  let oddString = "";
  let evenString = "";

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 !== 0 ? odd.push(num_list[i]) : even.push(num_list[i]);
  }

  for (let i = 0; i < odd.length; i++) {
    oddString += odd[i];
  }

  for (let i = 0; i < even.length; i++) {
    evenString += even[i];
  }

  return +evenString + +oddString;
}
