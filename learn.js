function findAverage(array) {
  // your code here
  let length=array.length;
  let summa=0;
  
  if (length==0) {return 0}
  else {
  array.forEach(function(elem) {summa+=elem});
  return summa/length;}
}