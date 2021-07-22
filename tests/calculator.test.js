let Calculator = require('../scripts/calculator.js');

let newCalc = new Calculator();

test('check if add works', () => {
    expect(newCalc.add(1 , 1)).toBe(2)
})

test('check if subtract works', () => {
    expect(newCalc.subtract(1 , 1)).toBe(0)
})

test('check if multiply works', () => {
    expect(newCalc.multiply(10 , 1)).toBe(10)
})

test('check if divide works', () => {
    expect(newCalc.divide(9 , 3)).toBe(3)
})