exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let minimal = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minimal > array[i]) {
            minimal = array[i];
        }
    }
    return minimal;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let maximal = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maximal < array[i]) {
            maximal = array[i];
        }
    }
    return maximal;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    });
    return sum / array.length;
};
