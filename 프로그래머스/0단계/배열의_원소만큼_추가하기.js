function solution(arr) {
  const X = [];
  for (const a of arr) {
    for (let i = 0; i < a; i++) {
      X.push(a);
    }
  }
  return X;
}
