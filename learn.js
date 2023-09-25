function periodIsLate(last, today, cycleLength) {
    if (((today-last)/(60 * 60 * 24 * 1000)) > cycleLength) return true
    else return false
}


