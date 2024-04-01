// https://school.programmers.co.kr/learn/courses/30/lessons/181890

// 2024-03-29
// 실패
function solution(str_list) {
  var answer = [];

  const indexL = str_list.indexOf('l');
  const indexR = str_list.indexOf('r');
  answer =
    indexL < indexR
      ? str_list.slice(0, indexL)
      : str_list.slice(indexR, str_list.length - 1);

  return answer;
}

// 2024-03-29
// 실패
function solution(str_list) {
  var answer = [];

  const indexL = Math.abs(str_list.indexOf('l'));
  const indexR = Math.abs(str_list.indexOf('r'));

  if (indexL < indexR) {
    answer = str_list.slice(0, indexL);
  } else if (indexL > indexR) {
    answer = str_list.slice(indexR + 1, str_list.length);
  }

  return answer;
}

// 2024-03-30
// 성공
function solution(str_list) {
  var answer = [];

  const indexL = str_list.indexOf('l');
  const indexR = str_list.indexOf('r');

  if (indexL === -1 && indexR === -1) {
    return answer;
  } else if (indexL === -1) {
    return str_list.slice(indexR + 1, str_list.length);
  } else if (indexR === -1) {
    return str_list.slice(0, indexL);
  }

  if (indexL < indexR) {
    answer = str_list.slice(0, indexL);
  } else if (indexL > indexR) {
    answer = str_list.slice(indexR + 1, str_list.length);
  }

  return answer;
}

// 2024-03-30
// 성공
function solution(str_list) {
  var answer = [];

  for (let i = 0; i < str_list.length; i++) {
    const direction = str_list[i];
    if (direction === 'l') {
      answer = str_list.slice(0, i);
      break;
    }
    if (direction === 'r') {
      answer = str_list.slice(i + 1);
      break;
    }
  }

  return answer;
}
