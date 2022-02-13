/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EC2::NetworkAcl
 */
export interface AwsEc2Networkacl {
  Id?: string;
  /**
   * The tags to assign to the network ACL.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
