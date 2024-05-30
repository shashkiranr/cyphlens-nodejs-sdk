import {AxiosAdapter} from "axios";

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  sdkVersion: string;
  additionalHeaders?: Readonly<Record<string, string>>;
  userAgentDetail?: string;
  environment: Environment;
  accessToken?: string;
  baseUrl?: string;
  httpClientOptions?: Partial<AxiosAdapter>;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
  Testing = 'testing',
}
