var hotpo = function(n) {
    let num = 0
    while (n>1) {
      num++;
      n=  n % 2 ? 3*n + 1 : n/2;
    }
    return num;
}






