
function findMaxMin(arr) {
    let max = 0;
    let min = 999999;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return {max , min}
    
}

function getAvg(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;    
    });
    return sum/(arr.length)
}

function arrayAnalysis(arr) {
    //Write a function that takes an array
    // of numbers and returns an object with the following 
    //properties: average, min, max, and length.
    return {
        average:getAvg(arr),
        min: findMaxMin(arr).min,
        max: findMaxMin(arr).max,
        length: arr.length
    }
}

module.exports = arrayAnalysis;