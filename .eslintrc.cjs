module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: [],
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': 0,
  },
}
