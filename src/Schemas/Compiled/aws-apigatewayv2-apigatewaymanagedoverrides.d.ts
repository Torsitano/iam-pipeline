/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 */
export interface AwsApigatewayv2Apigatewaymanagedoverrides {
  Stage?: StageOverrides;
  Integration?: IntegrationOverrides;
  Id?: string;
  ApiId: string;
  Route?: RouteOverrides;
}
export interface StageOverrides {
  Description?: string;
  AccessLogSettings?: AccessLogSettings;
  AutoDeploy?: boolean;
  RouteSettings?: {
    [k: string]: unknown;
  };
  StageVariables?: {
    [k: string]: unknown;
  };
  DefaultRouteSettings?: RouteSettings;
}
export interface AccessLogSettings {
  DestinationArn?: string;
  Format?: string;
}
export interface RouteSettings {
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}
export interface IntegrationOverrides {
  TimeoutInMillis?: number;
  Description?: string;
  PayloadFormatVersion?: string;
  IntegrationMethod?: string;
}
export interface RouteOverrides {
  AuthorizationScopes?: string[];
  Target?: string;
  AuthorizationType?: string;
  AuthorizerId?: string;
  OperationName?: string;
}