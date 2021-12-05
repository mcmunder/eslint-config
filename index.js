module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'react',
      '@emotion',
      'react-hooks',
      'import-helpers',
      'prettier',
    ],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'import-helpers/order-imports': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
  