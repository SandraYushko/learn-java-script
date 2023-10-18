const neutralise = (s1, s2) => {
    let s = ''
    for (let i = 0; i < s1.length; i++) {
        (s1[i] == s2[i]) ? (s += s1[i]) : (s += '0')
    }
    return s
}






