const reverseString = function(input) {
    let splittedArray = input.split("")
    let reversedArray = splittedArray.reverse()
    return reversedArray.join("")
};

// Do not edit below this line
module.exports = reverseString;