// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    prettierConfig,
    {
        languageOptions: {
            ecmaVersion: 2022,
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module"
            }
        },
    }
);
