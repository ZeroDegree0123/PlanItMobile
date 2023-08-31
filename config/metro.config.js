// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs')

module.exports = defaultConfig;

// module.exports = function (api) {
//     api.cache(true);
//     return {
//       presets: ["babel-preset-expo"],
//       plugins: ["nativewind/babel",  
//         [
//           "module:react-native-dotenv", 
//           {
//             "envName": "APP_ENV",
//             "moduleName": "@env",
//             "path": ".env",
//             "blocklist": null,
//             "allowlist": null,
//             "safe": false,
//             "allowUndefined": true,
//             "verbose": false
//           }
//         ]
//       ],
//     };
//   };
  