function capitalize(str) {
    // takes a string and returns that string with the first character capitalized.
    let strArr = str.split('')
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

module.exports = capitalize;