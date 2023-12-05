function tripleTrouble(one, two, three){
    let str = one[0]+two[0]+three[0]
    for (let i=1; i<one.length; i++) {
        str += one[i]+two[i]+three[i]
    }
    return str
}






