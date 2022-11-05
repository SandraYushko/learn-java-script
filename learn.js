function checkAge(age) {
    if (age > 18) {
      return alert('true');
    }
    // ...
    return confirm('Родители разрешили?');
  } 
  let age=prompt('введите ваш возраст');
  checkAge(age) 
