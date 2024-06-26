module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:cypress/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'no-import-assign': 0,
    'react/no-unescaped-entities': 0,
  },
  overrides: [
    {
      files: ['cypress/**'],
      plugins: ['cypress'],
      rules: {
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'cypress/no-pause': 'error',
      },
    },
  ],
  plugins: [],
}
