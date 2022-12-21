function betterThanAverage(x, y) {
  // Your code here
  return x.reduce((sum,elem) => sum+elem, 0) / x.length < y;
  
}