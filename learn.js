function sumArray(array) {
  if (array ===null || array ===[ ] || array ===undefined) return 0
  else {
    let newArray = array.sort(function(a,b){return a-b})
    let sum = 0
    for (let i=1; i< (newArray.length-1); i++){
      sum += newArray[i]
    }
    return sum
  }

}
sumArray([ 6, 2, 1, 8, 10 ])







