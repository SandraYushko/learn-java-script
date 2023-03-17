function points(games) {
  let sum = 0;
  games.forEach(item => {
    if (item[0] > item[2])  sum+=3;
    if (item[0] === item[2])  sum+=1;
  });
  return sum;
  
  }




