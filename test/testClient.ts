import {Client, Configuration, Environment} from '../src';

const defaultTestConfiguration: Partial<Configuration> = {
    environment: Environment.Testing,
    timeout: 30000,
};


export const testClient: Client = (function (config?:Partial<Configuration>) {
    const clientId = process.env.CLIENT_ID ?? '';
    const clientSecret = process.env.CLIENT_SECRET ?? '';

    return new Client(clientId, clientSecret, {...defaultTestConfiguration,...config});
})();