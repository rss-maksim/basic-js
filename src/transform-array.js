const sequencesMapHandlers = {
    '--discard-next': discardNext,
    '--discard-prev': discardPrev,
    '--double-next': doubleNext,
    '--double-prev': doublePrev
};

const set = new Set(Object.keys(sequencesMapHandlers));

module.exports = function transform(array) {
    if (!Array.isArray(array)) {
        throw new Error('Array not presented')
    }
    if (!array.length) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (set.has(item)) {
            return sequencesMapHandlers[item](array.filter(item => !set.has(item)), i);
        }
    }
};

function discardNext(array, i) {
    return array.filter((item, index) => index !== i + 1);
}

function discardPrev(array, i) {
    return array.filter((item, index) => index !== i - 1);
}

function doubleNext(array, i) {
    return [...array.slice(0, i), array[i + 1], ...array.slice(i + 1)];
}

function doublePrev(array, i) {
    return [...array.slice(0, i - 1), array[i - 1], ...array.slice(i - 1)];
}
