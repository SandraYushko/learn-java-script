function feast(beast, dish) {

  if ((beast[0] == dish[0])  &&  (beast[beast.length-1] == dish[dish.length-1])) {return true}
  return false
}

feast("chickadee", "chocolate cake")
feast("brown bear", "bear claw")








