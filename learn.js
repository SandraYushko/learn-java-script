var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let CatYears=0;
  let DogYears=0;
  
  if (humanYears==1) {
    CatYears+=15;
    DogYears+=15;
  }
  else if (humanYears==2) {
    CatYears+=15+9;
    DogYears+=15+9;
  }
   else {
    CatYears+=15+9+(humanYears-2)*4;
    DogYears+=15+9+(humanYears-2)*5;
  }
  
  return [humanYears,CatYears,DogYears];
}