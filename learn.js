function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let itog=marks.reduce(function(sum,elem){
    return sum+elem;
  },0);
  return Math.floor(itog/marks.length);
}