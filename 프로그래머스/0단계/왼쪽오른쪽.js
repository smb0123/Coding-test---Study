function solution(str_list) {
  let leftIndex = str_list.indexOf("l");
  let rightIndex = str_list.indexOf("r");

  if (leftIndex === -1 && rightIndex === -1) {
    return [];
  } else if (leftIndex !== -1 && rightIndex !== -1) {
    return leftIndex < rightIndex
      ? str_list.slice(0, leftIndex)
      : str_list.slice(rightIndex + 1);
  } else if (leftIndex !== -1) {
    return str_list.slice(0, leftIndex);
  } else {
    return str_list.slice(rightIndex + 1);
  }
}
