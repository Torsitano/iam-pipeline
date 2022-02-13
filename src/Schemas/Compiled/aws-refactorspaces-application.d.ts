/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ApiGatewayEndpointType = "REGIONAL" | "PRIVATE";
export type ProxyType = "API_GATEWAY";

/**
 * Definition of AWS::RefactorSpaces::Application Resource Type
 */
export interface AwsRefactorspacesApplication {
  ApiGatewayProxy?: ApiGatewayProxyInput;
  Arn?: string;
  ApiGatewayId?: string;
  VpcLinkId?: string;
  NlbArn?: string;
  NlbName?: string;
  ApplicationIdentifier?: string;
  EnvironmentIdentifier?: string;
  Name?: string;
  ProxyType?: ProxyType;
  VpcId?: string;
  StageName?: string;
  ProxyUrl?: string;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
}
export interface ApiGatewayProxyInput {
  StageName?: string;
  EndpointType?: ApiGatewayEndpointType;
}
/**
 * A label for tagging Environment resource
 */
export interface Tag {
  /**
   * A string used to identify this tag
   */
  Key: string;
  /**
   * A string containing the value for the tag
   */
  Value: string;
}
