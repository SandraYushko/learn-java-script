function digitize(n) {
  //code here
  return String(n).split('').reverse().map(Number);
}