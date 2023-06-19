function getMiddle(s) {
  let otstup = Math.ceil(s.length/2)-1;
  return (s.length==1)
      ? s
      : s.slice(otstup, -otstup)
}

getMiddle("test")
getMiddle("A")








