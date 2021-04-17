const palindromes = function(str) {
    const processedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    return processedStr.split("").reverse().join("") === processedStr;
}

module.exports = palindromes