function solution(spell, dic) {
  const spellWord = spell.sort().join("");

  for (let i = 0; i < dic.length; i++) {
    const dicWord = dic[i].split("").sort().join("");
    if (spellWord === dicWord) {
      return 1;
    }
  }

  return 2;
}
