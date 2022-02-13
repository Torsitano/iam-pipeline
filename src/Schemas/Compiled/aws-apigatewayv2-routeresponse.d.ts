/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::RouteResponse
 */
export interface AwsApigatewayv2Routeresponse {
  Id?: string;
  RouteResponseKey: string;
  ResponseParameters?: {
    [k: string]: unknown;
  };
  RouteId: string;
  ModelSelectionExpression?: string;
  ApiId: string;
  ResponseModels?: {
    [k: string]: unknown;
  };
}