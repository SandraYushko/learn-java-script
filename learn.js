var number = function(busStops){
  // Good Luck!
  let sum = 0;
  let numberOfPeople = 0;
  for (const key in busStops){
    sum = busStops[key][0] - busStops[key][1];
    numberOfPeople += sum; 
  }
  return numberOfPeople;
}



