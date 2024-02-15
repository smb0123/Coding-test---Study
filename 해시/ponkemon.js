function solution(nums) {
  let answer = 0;

  const choiceHow = nums.length / 2; // 뽑을 마리 수
  const result = {}; //종류를 담을 객체 선언
  // result 객체에 프로퍼티로 num이 있으면 값에 1을 더하고, 없으면 프로퍼티로 추가
  const choiceWhat = nums.forEach((num) => {
    num in result ? (result[num] = result[num] + 1) : (result[num] = 1);
  });

  //앞서 구한, result를 배열로 변환 후 개수 구함 (중복 제거된 nums)
  const whatnum = Object.keys(result).length;

  // 뽑을 마리수보다 종류가 같거나 많으면 뽑을 수 출력, 아니면 마리 수 출력
  choiceHow <= whatnum ? (answer = choiceHow) : (answer = whatnum);

  return answer;
}
