function solution(today, terms, privacies) {
  const todayDate = new Date(today);

  const termObj = {};
  terms.forEach((term) => {
    const [type, period] = term.split(" ");
    termObj[type] = parseInt(period, 10);
  });

  const deleteList = [];
  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(" ");
    const expireMonth = termObj[term];
    const collectionDate = new Date(date);
    const expireDay = new Date(
      collectionDate.setMonth(collectionDate.getMonth() + expireMonth)
    );

    if (expireDay <= todayDate) {
      deleteList.push(index + 1);
    }
  });

  return deleteList;
}
