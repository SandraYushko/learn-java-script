function checkSpam(str) {
  let strNew=str.toLowerCase();

  return strNew.includes('viagra') || strNew.includes('xxx') 
  
}

checkSpam('buy ViAgRA now'); 
checkSpam('free xxxxx'); 
checkSpam("innocent rabbit");