import type { Config } from "@jest/types";
const path = require("path");

const config: Config.InitialOptions = {
  verbose: false,
  automock: false,
  bail: 1,
  collectCoverage: true,
  coverageDirectory: path.join(__dirname, "coverage"),
};

module.exports = config;

// 异步导出jest测试配置
// module.exports = async function (): Promise<Config.InitialOptions> {
//   return {
//     verbose: true,
//     automock: true,
//   };
// };
