module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    commonjs: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'plugin:vue/base',
    'prettier/vue',
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true,
      classes: true,
    },
  },
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    // 'vue/html-indent': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-indent': [
      'error',
      type,
      {
        attribute: 1,
        baseIndent: 0,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
  },
};
