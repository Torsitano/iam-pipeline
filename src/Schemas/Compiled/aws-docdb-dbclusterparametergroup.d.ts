/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::DocDB::DBClusterParameterGroup
 */
export interface AwsDocdbDbclusterparametergroup {
  Id?: string;
  Description: string;
  Parameters: {
    [k: string]: unknown;
  };
  Family: string;
  Tags?: Tag[];
  Name?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}