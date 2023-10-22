function flickSwitch(arr){
    let start = true
    return arr.map(el => {
        if (el === 'flick') return start=!start
        else return start
    } )
}






