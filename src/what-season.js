function isValid(date) {
  return date instanceof Date && !isNaN(date);
}

const seasons = [
  [11, 'winter'],
  [8, 'autumn'],
  [5, 'summer'],
  [2, 'spring'],
  [0, 'winter'],
];

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!isValid(date)) {
    throw new Error('Invalid date');
  }
  const month = date.getMonth();
  for (let [key, season] of seasons) {
    if (month >= key) {
      return season;
    }
  }
};
