function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    var myArr = rangeOfNumbers(startNum + 1, endNum);
    myArr.push(startNum);
    return myArr;
  }
}

console.log(rangeOfNumbers(1, 5));
