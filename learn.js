function findShort(s) {
  
  let arr = s.split(' ');
  let min=arr[0].length;
     for (let i=1; i<(arr.length); i++) {
        if (min>arr[i].length) {min=arr[i].length}
     }
  return min;
}
