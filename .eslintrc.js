module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-destructure-keys/sort-destructure-keys': [2, { 'caseSensitive': false }],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'no-use-before-define': 'off'
  }
}
