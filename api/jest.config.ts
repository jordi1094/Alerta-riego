import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

const { compilerOptions } = require('./tsconfig.json');

const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, {
    prefix: '<rootDir>/',
  }),
  testMatch: ['<rootDir>/src/test/**/*.test.ts'],
};

export default config;