const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    let arr = [1, 1];
    if (a == 1 || a == 2) return arr[a - 1];
    for (let i = 2; i <= a - 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[a - 1];
}

module.exports = fibonacci