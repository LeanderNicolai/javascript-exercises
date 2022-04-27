const repeatString = function(input, amount) {
    if (amount < 0) {
        return 'ERROR'
    }
    let result = ''
    for (i = 0; i < amount; i++) {
        result += input.toString()
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;