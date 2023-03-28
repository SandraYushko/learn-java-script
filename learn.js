function sortMyString(S) {
  // your code here
let neChetnie='';
let chetnie='';
for (let i=0; i<S.length; i++){
  if (i%2 == 0) {chetnie += S[i]}
  else {neChetnie += S[i]}
}
  return `${chetnie} ${neChetnie}`;
}



