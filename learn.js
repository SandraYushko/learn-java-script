function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let number = Math.sqrt(sq);
  if (Number.isInteger(number)) {
    return Math.pow((number+1),2)
  }
  else return -1;
}



