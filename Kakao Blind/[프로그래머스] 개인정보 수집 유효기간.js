// https://school.programmers.co.kr/learn/courses/30/lessons/150370

// 2024-02-10
function solution(today, terms, privacies) {
  var answer = [];

  const todayDay = dateToDay(today);
  const termTypeObj = {};

  terms.forEach((term) => {
    const [type, month] = term.split(' ');
    termTypeObj[type] = monthToDay(month);
  });

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(' ');

    const privacyDay = dateToDay(date);
    const remainDay = termTypeObj[type];

    if (todayDay - privacyDay >= remainDay) {
      answer.push(index + 1);
    }
  });

  return answer;
}

function dateToDay(date) {
  const [year, month, day] = date.split('.');
  const resultDay = yearToDay(year) + monthToDay(month) + Number(day);
  return resultDay;
}

function yearToDay(year) {
  const day = Number(year) * 12 * 28;
  return day;
}

function monthToDay(month) {
  const day = Number(month) * 28;
  return day;
}
