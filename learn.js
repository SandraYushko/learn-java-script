// Sum Numbers
function sum (numbers) {
  "use strict";
  let sum=0;
  numbers.forEach(function(elem) {
  sum+=elem; 
  });
  return sum;
};