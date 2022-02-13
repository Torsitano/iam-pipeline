/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ElasticBeanstalk::Environment
 */
export interface AwsElasticbeanstalkEnvironment {
  PlatformArn?: string;
  ApplicationName: string;
  Description?: string;
  EnvironmentName?: string;
  OperationsRole?: string;
  Tier?: Tier;
  VersionLabel?: string;
  EndpointURL?: string;
  OptionSettings?: OptionSetting[];
  TemplateName?: string;
  SolutionStackName?: string;
  Id?: string;
  CNAMEPrefix?: string;
  Tags?: Tag[];
}
export interface Tier {
  Type?: string;
  Version?: string;
  Name?: string;
}
export interface OptionSetting {
  Value?: string;
  ResourceName?: string;
  Namespace: string;
  OptionName: string;
}
export interface Tag {
  Value: string;
  Key: string;
}