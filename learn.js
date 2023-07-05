function howMuchILoveYou(nbPetals) {
    let phrase = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    if (nbPetals%6===0) {return phrase[5]}
    else return phrase[nbPetals%6-1]
}



