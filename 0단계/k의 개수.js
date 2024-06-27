function solution(i, j, k) {
  var answer = 0;

  for (let h = i; h <= j; h++) {
    let good = h.toString();
    const strK = k.toString();

    for (let z = 0; z < good.length; z++) {
      if (good[z] === strK) {
        answer++;
      }
    }
  }
  return answer;
}
