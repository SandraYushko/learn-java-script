function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let numbersNew = numbers.sort(function(a,b){return a-b});
  return numbersNew[0]+numbersNew[1];
}



