function symmetricPoint(p, q) {
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];
    const x = q[0] + dx;
    const y = q[1] + dy;
    return [x, y];
}






