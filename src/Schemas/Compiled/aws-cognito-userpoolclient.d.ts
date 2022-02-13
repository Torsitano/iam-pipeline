/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolClient
 */
export interface AwsCognitoUserpoolclient {
  AnalyticsConfiguration?: AnalyticsConfiguration;
  GenerateSecret?: boolean;
  CallbackURLs?: string[];
  IdTokenValidity?: number;
  AllowedOAuthScopes?: string[];
  TokenValidityUnits?: TokenValidityUnits;
  ReadAttributes?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  DefaultRedirectURI?: string;
  SupportedIdentityProviders?: string[];
  Name?: string;
  ClientName?: string;
  UserPoolId: string;
  AllowedOAuthFlows?: string[];
  ClientSecret?: string;
  ExplicitAuthFlows?: string[];
  LogoutURLs?: string[];
  AccessTokenValidity?: number;
  RefreshTokenValidity?: number;
  Id?: string;
  WriteAttributes?: string[];
  PreventUserExistenceErrors?: string;
  EnableTokenRevocation?: boolean;
}
export interface AnalyticsConfiguration {
  ApplicationArn?: string;
  ApplicationId?: string;
  UserDataShared?: boolean;
  RoleArn?: string;
  ExternalId?: string;
}
export interface TokenValidityUnits {
  IdToken?: string;
  RefreshToken?: string;
  AccessToken?: string;
}
