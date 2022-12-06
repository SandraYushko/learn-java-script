let num = 56

	if (num >= 10 && num <= 99) {
		let num1=String(num);
    num1=Number(num1[0])+Number(num1[1]);
    console.log(num1);
    if (num1<=9) {
      console.log('summa odnoznachna');
    }
    else {
      console.log('summa dvuznachna');
    }
	} 
  