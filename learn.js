function invert(array) {
  array.forEach(function(item, index){
    array[index]=-item;
  }) 
  return array;
}
