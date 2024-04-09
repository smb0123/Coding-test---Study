function solution(id_pw, db) {
  const [inputId, inputPw] = id_pw;
  let idMatch = false;

  for (let i = 0; i < db.length; i++) {
    const [dbId, dbPw] = db[i];

    if (inputId === dbId) {
      idMatch = true;
      if (inputPw === dbPw) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }

  if (!idMatch) {
    return "fail";
  }
}
