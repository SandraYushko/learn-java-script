function neutralise(s1, s2) {
    let s = ''
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) {
            s = s+s1[i]
        }
        else s = s+'0'
    }
    return s
}






