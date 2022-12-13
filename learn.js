
function correct(string)
{
	// your code here
let n1=/0/gi;
let n2=/5/gi;
let n3=/1/gi;    
  let newStr=string.replace(n2, 'S'); 
  newStr=newStr.replace(n1, 'O'); 
  newStr=newStr.replace(n3, 'I'); 
  return newStr;
  
}



