function XO(str) {
    let sumX = 0;
    let sumO = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] == "x") || (str[i] == "X")) sumX++
        else if ((str[i] == "o") || (str[i] == "O")) sumO++
    }
    return sumX === sumO;
}



//XO("xxOo")
//XO("xxxm")






