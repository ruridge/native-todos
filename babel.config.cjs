// @ts-check
/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache.forever();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      // Reanimated plugin has to be listed last:
      // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
    ],
  };
};
