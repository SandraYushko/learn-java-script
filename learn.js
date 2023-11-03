function distanceBetweenPoints(a, b) {
    const distanceВX = b.x - a.x;
    const distanceВY = b.y - a.y;
    const distance = Math.sqrt(distanceВX ** 2 + distanceВY ** 2);
    return distance;
}






