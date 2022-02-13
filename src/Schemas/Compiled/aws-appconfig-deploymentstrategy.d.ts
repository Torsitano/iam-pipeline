/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppConfig::DeploymentStrategy
 */
export interface AwsAppconfigDeploymentstrategy {
  ReplicateTo: string;
  GrowthType?: string;
  Description?: string;
  DeploymentDurationInMinutes: number;
  GrowthFactor: number;
  Id?: string;
  FinalBakeTimeInMinutes?: number;
  Tags?: Tags[];
  Name: string;
}
export interface Tags {
  Value?: string;
  Key?: string;
}
