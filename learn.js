function pillars(numPill, dist, width) {

  if (numPill===1) return 0
  else return (numPill-1)*dist*100+width*(numPill-2)

}




