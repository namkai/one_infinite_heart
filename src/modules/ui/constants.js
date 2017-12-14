[
  'TOGGLE_IS_LOADING'
].forEach(type => {
  if (type.endsWith('_')) {
    Object.assign(module.exports, {
      [`${type}STARTED`]: `${type}STARTED`,
      [`${type}COMPLETED`]: `${type}COMPLETED`,
      [`${type}FAILED`]: `${type}FAILED`
    });
  } else {
    Object.assign(module.exports, {
      [type]: type
    });
  }
});