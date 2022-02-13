/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 */
export interface AwsElasticbeanstalkApplicationversion {
  Id?: string;
  ApplicationName: string;
  Description?: string;
  SourceBundle: SourceBundle;
}
export interface SourceBundle {
  S3Bucket: string;
  S3Key: string;
}
