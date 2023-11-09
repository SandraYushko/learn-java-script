function array(string) {
    let s=string.split(',')
    if (s.length <= 2) return null
    s.shift()
    s.pop()
    return s.join(" ")
}






