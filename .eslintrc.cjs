module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['vue'],
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-v-model-argument': 0,
  },
}
