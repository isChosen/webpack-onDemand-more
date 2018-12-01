module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"], // 换行格式： LF
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"], // 尾部逗号
    "arrow-parens": ["error", "as-needed"] // 箭头函数，一个参数时不需要括号
  }
};
