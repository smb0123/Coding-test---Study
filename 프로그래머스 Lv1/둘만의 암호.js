function solution(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((c) => !skip.includes(c));
  console.log(alphabet);
  return s
    .split("")
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length])
    .join("");
}
console.log(solution("aukks", "wbqd", 5));
