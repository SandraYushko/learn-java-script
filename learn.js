function mergeArrays(a, b) {
    return [...new Set(a.concat(b).sort((c,d)=>c-d))]
}







