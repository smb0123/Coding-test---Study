function solution(today, terms, privacies) {
  const answer = [];

  const expire = new Date(today);
  const termType = {};
  terms.forEach((item) => {
    const [type, term] = item.split(" ");

    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");

    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + termType[type]);

    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
