const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    } else if (a < 0 || b < 0) {
        return "ERROR"
    }
    const length = Math.abs(b - a) + 1;
    let couples = length / 2;
    if (length % 2 === 0) {
        return (a + b) * couples;
    } else {
        couples = Math.floor(couples);
        return b > a ? (a + b) * couples + couples + a :
            (a + b) * couples + couples + b;
    }
}

module.exports = sumAll;