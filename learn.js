function grow(x){
  let proizvedenie=1;
x.forEach(function(elem){
  proizvedenie*=elem;
});
  return proizvedenie;
}