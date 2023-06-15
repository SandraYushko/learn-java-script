function squareDigits(num){
  let numString = String(num)
  let newNumString=""
  for (let i=0; i<numString.length; i++) newNumString += String(numString[i]*numString[i])
  return +newNumString
}

squareDigits(3212)
squareDigits(2112)








