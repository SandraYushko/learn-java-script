function excludingVatPrice(price){
    if (price === null) return -1
    let num=price/1.15
    return +num.toFixed(2)
}






