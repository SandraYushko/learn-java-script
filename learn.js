function highAndLow(numbers){
  console.log(`${Math.max.apply(null, numbers.split(" "))} ${Math.min.apply(null, numbers.split(" "))}`);
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")






