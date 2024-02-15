function solution(participant, completion) {
  const participantMap = new Map();
  for (const name of participant) {
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  }

  for (const name of completion) {
    participantMap.set(name, participantMap.get(name) - 1);
  }

  let answer = null;

  participantMap.forEach((count, name) => {
    if (count > 0) {
      answer = name;
      return;
    }
  });

  return answer;
}
