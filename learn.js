function contamination(text, char){
    if (text==='' || char==='') {
        return '';
    } else {
        let result='';
        for (let i=0; i<text.length; i++) {
            result+=char
        }
        return result
    }
}







