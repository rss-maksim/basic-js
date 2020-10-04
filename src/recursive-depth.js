module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        while (this.isArrayIncludes(arr)) {
            depth += 1;
            arr = this.flat(arr);
        }
        return depth;
    }

    isArrayIncludes(arr) {
        return arr.some(item => Array.isArray(item));
    }

    flat(arr) {
        return arr.reduce((acc, item) => [...acc,  ...(Array.isArray(item) ? item : [item])], []);
    }
};
