/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::DocDB::DBSubnetGroup
 */
export interface AwsDocdbDbsubnetgroup {
  Id?: string;
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription: string;
  SubnetIds: string[];
  Tags?: Tag[];
}
export interface Tag {
  Key: string;
  Value: string;
}
