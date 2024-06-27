function solution(participant, completion) {
  var answer = "";

  // 두 개의 배열 순서를 똑같게 정렬한다.
  const part = participant.sort();
  const comple = completion.sort();

  // 반복문을 돌며, 같은 인덱스에 같은 이름이 없으면 참여자 배열에 있는 i번째 이름 반환
  for (let i = 0; i < completion.length; i++) {
    part[i] === comple[i]
      ? (answer = part[part.length - 1]) // 미완주자가 마지막에 있으면 마지막 이름 출력
      : (answer = part[i]);
  }

  return answer;
}
