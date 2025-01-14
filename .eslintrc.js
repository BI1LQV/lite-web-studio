module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    'prettier'
  ],
  plugins: ['vue', 'prettier'],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/require-default-prop': 'off'
  },
  ignorePatterns: ['.eslintrc.js']
};
