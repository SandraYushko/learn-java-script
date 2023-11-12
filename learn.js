function anyArrows(arrows){
    // arrow it
    let newArr = arrows.filter(a => a.damaged !== true);
    if (newArr.length>0) return true
    else return false
}






