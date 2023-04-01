function consecutive(arr) {
  //code me
    let max = Math.max.apply(null,arr);
    let min = Math.min.apply(null,arr);
    if (arr.length > 2) return (max - min) - arr.length+1;
        
    else return 0;
    //((arr.length = 0) || (arr.length = 1))
  }



