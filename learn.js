var cubeChecker = function(volume, side){
    if (volume>0||side>0) {
        return side*side*side === volume ? true : false
    }
    return false
};









