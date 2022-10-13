// @ts-check
/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache.forever();
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
