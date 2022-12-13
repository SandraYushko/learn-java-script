function arrayPlusArray(arr1, arr2) {
  let newArr=arr1.concat(arr2);
  let result=newArr.reduce(function(sum,elem){
    return sum+elem;
  },0);
  return result;
}