/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticBeanstalk::Application
 */
export interface AwsElasticbeanstalkApplication {
  Id?: string;
  ApplicationName?: string;
  Description?: string;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export interface ApplicationResourceLifecycleConfig {
  ServiceRole?: string;
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}
export interface ApplicationVersionLifecycleConfig {
  MaxAgeRule?: MaxAgeRule;
  MaxCountRule?: MaxCountRule;
}
export interface MaxAgeRule {
  DeleteSourceFromS3?: boolean;
  Enabled?: boolean;
  MaxAgeInDays?: number;
}
export interface MaxCountRule {
  DeleteSourceFromS3?: boolean;
  Enabled?: boolean;
  MaxCount?: number;
}