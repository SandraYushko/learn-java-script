let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
let sum=0;
function getAverageAge(arr) {
  arr.forEach(function(elem){
    sum+=elem.age;
  });
  return sum/arr.length;  
};


alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
