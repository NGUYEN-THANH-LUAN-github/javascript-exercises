const repeatString = function(str, num) {
    if (!str || !num) { return '' } else if (num < 0) { return 'ERROR' };
    return str.repeat(num);
}

module.exports = repeatString