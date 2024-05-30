import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    testEnvironment:"node",
    preset:'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};

export default config;