/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Glue::SecurityConfiguration
 */
export interface AwsGlueSecurityconfiguration {
  EncryptionConfiguration: EncryptionConfiguration;
  Name: string;
  Id?: string;
}
export interface EncryptionConfiguration {
  S3Encryptions?: S3Encryptions;
  JobBookmarksEncryption?: JobBookmarksEncryption;
  CloudWatchEncryption?: CloudWatchEncryption;
}
export interface S3Encryptions {}
export interface JobBookmarksEncryption {
  KmsKeyArn?: string;
  JobBookmarksEncryptionMode?: string;
}
export interface CloudWatchEncryption {
  KmsKeyArn?: string;
  CloudWatchEncryptionMode?: string;
}