module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier',
    'eslint:recommended',
    '@vue/prettier',
  ],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'prettier/prettier': 'error', //['error', {"singleQuote": true, "parser": "flow"}],
    "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'vue/html-indent': [
      'error',
      type,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    // "vue/attribute-hyphenation": ["error", "always"],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ]
  },
}
