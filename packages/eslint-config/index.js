module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 100,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
    }]
  },
}