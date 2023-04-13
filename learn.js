function accum(s) {
  // your code
  return (s.split("").map((item, index) => (item.toUpperCase() + item.repeat(index).toLowerCase())).join('-'));
}


accum("ZpglnRxqenU");






