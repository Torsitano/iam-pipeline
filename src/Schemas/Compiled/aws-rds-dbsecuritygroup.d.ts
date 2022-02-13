/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup
 */
export interface AwsRdsDbsecuritygroup {
  Id?: string;
  DBSecurityGroupIngress: Ingress[];
  EC2VpcId?: string;
  GroupDescription: string;
  Tags?: Tag[];
}
export interface Ingress {
  CIDRIP?: string;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
