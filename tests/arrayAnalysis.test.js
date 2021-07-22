let arrayAnalysis = require('../scripts/arrayAnalysis.js')

test('check if this workd', () => {
    let arr = [1,8,3,4,2,6];
    let answer = {average: 4,length: 6,max: 8,min: 1};

    expect(arrayAnalysis(arr)).toEqual(answer);
})