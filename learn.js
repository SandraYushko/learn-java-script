function addLength(str) {
    let massiv=str.split(' ')
    return massiv.map(el=>`${el} ${el.length}`)
}



