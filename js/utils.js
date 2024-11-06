const getRandomNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomArrayElement};
