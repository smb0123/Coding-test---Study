function solution(emergency) {
  // 응급도를 복사하여 정렬
  const sortedEmergency = Array.from(emergency).sort((a, b) => b - a);

  // 원본 응급도 배열을 순회하며 각 원소의 순위를 찾아 반환
  return emergency.map((value) => sortedEmergency.indexOf(value) + 1);
}
