var arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    for (let i=0; i<arrayOfSheep.length; i++){
      let k=0;
      if (arrayOfSheep[i]===true) {k+=1}
    }
    return k
  }


  
