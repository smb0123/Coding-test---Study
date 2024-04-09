function solution(arr) {
  const rowCount = arr.length;
  const colCount = arr[0].length;

  if (rowCount > colCount) {
    for (let i = 0; i < rowCount; i++) {
      while (arr[i].length < rowCount) {
        arr[i].push(0);
      }
    }
  } else if (colCount > rowCount) {
    while (arr.length < colCount) {
      const newRow = new Array(colCount).fill(0);
      arr.push(newRow);
    }
  }

  return arr;
}
