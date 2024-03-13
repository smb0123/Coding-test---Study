function solution(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  let count = 0;

  for (const element of set1) {
    if (set2.has(element)) {
      count++;
    }
  }

  return count;
}
