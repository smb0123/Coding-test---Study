function solution(arr)
{
    var answer = [];
    for(let i of arr) {
        if(answer.at(-1) != i) {
            answer.push(i)
        }
    }
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));