let {caesar, decryptCaesar} = require('../scripts/caesarCipher');


test('check if caesar works', () => {
    expect(caesar('hello world!', 16)).toBe('xu@@%p=%*@t]');
})

test('check if decryptCaesar works', () => {
    expect(decryptCaesar('xu@@%p=%*@t]', 16)).toBe('hello world!');
})