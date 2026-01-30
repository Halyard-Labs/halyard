import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import next from '@next/eslint-plugin-next'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
  prettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
]
