// https://school.programmers.co.kr/learn/courses/30/lessons/120883

// 2024-04-06
// 성공
function solution(id_pw, db) {
  var answer = '';

  const [id, pw] = id_pw;

  answer = 'fail';
  for (let i = 0; i < db.length; i++) {
    const [dbId, dbPw] = db[i];
    if (id !== dbId) continue;
    if (pw !== dbPw) {
      answer = 'wrong pw';
      break;
    }
    answer = 'login';
  }

  return answer;
}
