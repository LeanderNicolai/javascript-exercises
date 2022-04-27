const ftoc = function(input) {
    let fahrenheit = parseFloat(input)
    let celsius = (fahrenheit - 32) * (5 / 9)
    return Math.round((celsius + Number.EPSILON) * 10) / 10
};

const ctof = function(input) {
    let celsius = parseFloat(input)
    let fahrenheit = (celsius * (9 / 5)) + 32
    return Math.round((fahrenheit + Number.EPSILON) * 10) / 10
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};