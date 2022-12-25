let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    menu[key]*2;
  }
}
console.log(menu);