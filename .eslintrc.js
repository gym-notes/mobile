module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    overrides: [
        {
          files: ['*.ts', '*.tsx'], // Your TypeScript files extension
          parserOptions: {
            project: ['./tsconfig.json'], // Specify it only for TypeScript files
          },
        }
      ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [
        'react', 'react-hooks', '@typescript-eslint', 'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        indent: [
            'error',
            2,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single',
            { 'avoidEscape': true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        'react': {
          'version': 'detect',
        },
    },
};
