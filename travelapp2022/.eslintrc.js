module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent':[0],//缩进
    "space before function parentheses":[0],
    "space before opening brace":[0],
    "semi-spacing": [0],
    "key-spacing":[0],
    "no-trailing-spaces":[0],
    "space-before-function-paren":[0],
    "space-before-blocks":[0],
    "prefer-const":[0],
    "space-infix-ops":[0],
    "no-multiple-empty-lines":[0],
    "eol-last":[0],
    "semi":[0],
    "comma-dangle":[0],
    "arrow-spacing":[0],
    "spaced-comment":[0],
    "object-curly-spacing":[0],
    "quotes":[0],
    "keyword-spacing":[0],
    "comma-spacing":[0],
    "no-irregular-whitespace":[0],
    "no-multi-spaces":[0]
  }
}
