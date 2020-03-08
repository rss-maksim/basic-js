const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const FACTOR = 0.693;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || !sampleActivity) {
        return false;
    }
    if (!/^[+-]?\d+(\.\d+)?$/.test(sampleActivity)) {
        const lastIndex = sampleActivity.lastIndexOf('.');
        sampleActivity = sampleActivity.slice(0, lastIndex - 1);
    }
    if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 || !Number(sampleActivity)) {
        return false;
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (FACTOR / HALF_LIFE_PERIOD));
};
