/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::ClientVpnRoute
 */
export interface AwsEc2Clientvpnroute {
  Id?: string;
  ClientVpnEndpointId: string;
  TargetVpcSubnetId: string;
  Description?: string;
  DestinationCidrBlock: string;
}
