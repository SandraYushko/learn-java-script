function filterRangeInPlace(arr, a, b) {
  arr = arr.slice(a,(b-1));
  console.log(arr);
  alert( arr ); // [3, 1]
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4


