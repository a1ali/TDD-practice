
// function getLetterNum(letter) {
//     let anum = {
//         a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, 
//         l: 11, m: 12, n: 13,o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, 
//         u: 20, v: 21, w: 22, x: 23, y: 24, z: 25, '!':26, '@':27, '#':28, 
//         '$':29, '%':30, '^':31, '&':32, '*':33, '(':34, ')':35, '-':36, '_':37,
//         '=':38, '+':39, '\\':40, '|':41, ']':42, '}':43, '[':44, '{':45, "'":46, 
//         '"':47, ';':48, ':':49, '/':50, '?':51, '.':52, '>':53, ',':54, '<':55, ' ':56
//     }
//     return anum[letter];
// }

// function isUpperCase(str)
// {
//     return str == str.toUpperCase() && str != str.toLowerCase();
// }

// function getShiftLetter(start, shift, encrypt) {
//     let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
//                 "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
//                 '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
//                 '\\', '|', ']', '}', '[', '{', "'", '"', ';', ':', '/', '?', '.', '>', ',', '<', ' '];
//     let position = 0;
//     if (encrypt) {
//         position = start + shift;
//     }
//     else { //decrypt
//         position = start - shift;
//     }
//     if (position <  0) {
//         return alphabet[(57 + position) % 57];
//     }
//     return alphabet[(position) % 57];
// }

// function caesar(str, shift) {
//     let newStr = [];
//     let oldStr = str.split('');

//     for (let i = 0; i < oldStr.length; i++){
//         let letter = oldStr[i];
//         let alphabetPosition = getLetterNum(letter.toLowerCase());
//         let encryptLetter = getShiftLetter(alphabetPosition, shift, true);
//         if (isUpperCase(oldStr[i])) {
//             encryptLetter = encryptLetter.toUpperCase();
//         }
//         newStr.push(encryptLetter);
//     }

//     return newStr.join('');
// }

// function decryptCaesar(str, shift) {
//     let newStr = [];
//     let oldStr = str.split('');

//     for (let i = 0; i < oldStr.length; i++){
//         let letter = oldStr[i];
//         let alphabetPosition = getLetterNum(letter.toLowerCase());
//         let decryptLetter = getShiftLetter(alphabetPosition, shift, false);
//         if (isUpperCase(oldStr[i])) {
//             decryptLetter = decryptLetter.toUpperCase();
//         }
//         newStr.push(decryptLetter);
//     }

//     return newStr.join('');

// }


function getLetterNum(letter) {
    let anum = {
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, 
        l: 11, m: 12, n: 13,o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, 
        u: 20, v: 21, w: 22, x: 23, y: 24, z: 25, '!':26, '@':27, '#':28, 
        '$':29, '%':30, '^':31, '&':32, '*':33, '(':34, ')':35, '-':36, '_':37,
        '=':38, '+':39, '\\':40, '|':41, ']':42, '}':43, '[':44, '{':45, "'":46, 
        '"':47, ';':48, ':':49, '/':50, '?':51, '.':52, '>':53, ',':54, '<':55, ' ':56
    }
    return anum[letter];
}

function isUpperCase(str)
{
    return str == str.toUpperCase() && str != str.toLowerCase();
}

function getShiftLetter(start, shift, encrypt) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
                '\\', '|', ']', '}', '[', '{', "'", '"', ';', ':', '/', '?', '.', '>', ',', '<', ' '];
    let position = 0;
    if (encrypt) {
        position = start + shift;
    }
    else {
        position = start - shift;
    }
    if (position <  0) {
        return alphabet[(57 + position) % 57];
    }
    return alphabet[(position) % 57];
}

function caesar(str, shift) {
    let newStr = [];
    let oldStr = str.split('');

    for (let i = 0; i < oldStr.length; i++){
        let letter = oldStr[i];
        let alphabetPosition = getLetterNum(letter.toLowerCase());
        let encryptLetter = getShiftLetter(alphabetPosition, shift, true);
        if (isUpperCase(oldStr[i])) {
            encryptLetter = encryptLetter.toUpperCase();
        }
        newStr.push(encryptLetter);
    }

    return newStr.join('');
}

function decryptCaesar(str, shift) {
    let newStr = [];
    let oldStr = str.split('');

    for (let i = 0; i < oldStr.length; i++){
        let letter = oldStr[i];
        let alphabetPosition = getLetterNum(letter.toLowerCase());
        let decryptLetter = getShiftLetter(alphabetPosition, shift, false);
        if (isUpperCase(oldStr[i])) {
            decryptLetter = decryptLetter.toUpperCase();
        }
        newStr.push(decryptLetter);
    }

    return newStr.join('');

}

let newLetter = caesar('Hello World!', 16);
console.log(newLetter)
let decryptLetter = decryptCaesar("Xu@@%p=%*@t]", 16)
console.log(decryptLetter)

module.exports = {caesar, decryptCaesar};