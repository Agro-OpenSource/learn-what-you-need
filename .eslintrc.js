module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: './',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    extraFileExtensions: ['.vue'],
  },
  extends: ['@vue/airbnb', 'plugin:vue/essential', '@vue/typescript', '@vue/typescript/recommended'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['off'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-param-reassign': ['off'],
    'no-plusplus': ['off'],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 120 }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
