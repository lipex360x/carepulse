import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

export default [
  { ignores: ['.next/**/*'] },
  { settings: { react: { version: 'detect' } } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettierPlugin,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
    },
  },
]
