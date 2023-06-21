function isIsogram(str){
  let massiv = str.split(" ")
  for (let i=0; i<str.length; i++) {
    if (massiv.includes(massiv[i],i)) return true
  }
}


isIsogram("aba")
isIsogram("moOse")
isIsogram("isIsogram")








