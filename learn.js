let calculateAge = (b, q) => {
    if (b===q) return "You were born this very year!"
    else if (q-b===1) return 'You are 1 year old.'
    else if (b-q===1) return 'You will be born in 1 year.'
    else if (b<q) return `You are ${q-b} years old.`
    else if (b>q) return `You will be born in ${b-q} years.`
}









