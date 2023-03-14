function getCount(str) {
    let sumGlasnih=0;
    let str2=[...str];
    str2.forEach(function(elem){
      if ((elem=="a") || (elem=="e") || (elem=="i") || (elem=="o") || (elem=="u") )
      {sumGlasnih+=1;}
    });

    return sumGlasnih;
  }
   
getCount('abracadabra');

