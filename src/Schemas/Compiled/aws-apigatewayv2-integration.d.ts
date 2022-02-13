/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Integration
 */
export interface AwsApigatewayv2Integration {
  Description?: string;
  TemplateSelectionExpression?: string;
  ConnectionType?: string;
  ResponseParameters?: {
    [k: string]: unknown;
  };
  IntegrationMethod?: string;
  PassthroughBehavior?: string;
  RequestParameters?: {
    [k: string]: unknown;
  };
  ConnectionId?: string;
  IntegrationUri?: string;
  PayloadFormatVersion?: string;
  CredentialsArn?: string;
  RequestTemplates?: {
    [k: string]: unknown;
  };
  TimeoutInMillis?: number;
  TlsConfig?: TlsConfig;
  ContentHandlingStrategy?: string;
  Id?: string;
  IntegrationSubtype?: string;
  ApiId: string;
  IntegrationType: string;
}
export interface TlsConfig {
  ServerNameToVerify?: string;
}
