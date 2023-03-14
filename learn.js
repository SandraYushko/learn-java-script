function isPythagoreanTriple(integers) {
  // Good luck friends!
let integers1 = integers.sort(function(a,b){return a-b});
if (integers1[0]*integers1[0] + integers1[1]*integers1[1] == integers1[2]*integers1[2]) {return true}
  else {return false}
}

isPythagoreanTriple([3, 4, 5]);

