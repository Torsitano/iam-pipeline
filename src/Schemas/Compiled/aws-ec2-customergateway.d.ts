/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::CustomerGateway
 */
export interface AwsEc2Customergateway {
  Id?: string;
  BgpAsn: number;
  IpAddress: string;
  Tags?: Tag[];
  Type: string;
}
export interface Tag {
  Key: string;
  Value: string;
}