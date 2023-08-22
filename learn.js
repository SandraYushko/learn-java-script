function isOpposite(s1,s2){
    if ((s1=='') || (s2=='')) return false


    let new_s1 = "";
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s1[i].toLowerCase()) {
            new_s1 += s1[i].toUpperCase();
        } else {
            new_s1 += s1[i].toLowerCase();
        }
    }


    return (new_s1 === s2)

}


