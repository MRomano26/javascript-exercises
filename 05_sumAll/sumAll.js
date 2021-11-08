const sumAll = function(x, y) {
    let sum = 0;
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }
    else if ( x < 0 || y < 0) {
        return "ERROR"
    }
    else if (x < y) {
        for (i = x; i <= y; i++) {
            sum += i;
        }
        return sum;
    }
    else if (y < x) {
        for (i = y; i <= x; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        //when x = y just return x
        return x;
    }
};

// Do not edit below this line
module.exports = sumAll;
