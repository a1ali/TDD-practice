function reverseString(str) {
    // takes a string and returns it reversed.
    let strArr = str.split('');
    let newArr = [];
    for (let i = strArr.length - 1; i >= 0; i--){
        newArr.push(strArr[i]);
    }

    return newArr.join('');
}

module.exports = reverseString