const { prettier } = require('./rules')

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettier],
  },
}
