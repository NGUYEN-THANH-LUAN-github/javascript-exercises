const removeFromArray = function(arr, ...otherArgs) {
    for (let i = 0; i < otherArgs.length; i++) {
        if (arr.includes(otherArgs[i])) {
            const index = arr.indexOf(otherArgs[i]);
            arr.splice(index, 1);
        }
    }
    return arr;
}

module.exports = removeFromArray;