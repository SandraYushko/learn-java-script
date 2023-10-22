function flickSwitch(arr){
    let start = true
    return arr.map(el => {
        return (el === 'flick') ? start=!start : start
    } )
}






