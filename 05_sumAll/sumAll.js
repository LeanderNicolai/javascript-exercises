const sumAll = function(start, end) {
    if (typeof start != 'number' || typeof end != 'number') {
        return 'ERROR'
    }

    if (start < 0 || end < 0) {
        return 'ERROR'
    }
    let range = [start, end]
    range.sort()
    let total = 0
    for (i = range[0]; i < range[1] + 1; i++) {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;