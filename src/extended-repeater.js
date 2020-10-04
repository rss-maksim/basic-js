module.exports = function repeater(str, options) {
    const { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;
    const additionString = repeat(addition, additionRepeatTimes, additionSeparator);
    if (!str) {
        console.log('repeater', { addition, additionString })
    }
    return repeat(`${str}${additionString}`, repeatTimes, separator);
};

function repeat(str, n, separator) {
    const string = typeof str === 'undefined' ? '' : String(str);
    return Array.from({ length: n }, () => string).join(separator);
}
