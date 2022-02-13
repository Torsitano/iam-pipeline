/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SecretsManager::RotationSchedule
 */
export interface AwsSecretsmanagerRotationschedule {
  Id?: string;
  RotationLambdaARN?: string;
  RotationRules?: RotationRules;
  RotateImmediatelyOnUpdate?: boolean;
  SecretId: string;
  HostedRotationLambda?: HostedRotationLambda;
}
export interface RotationRules {
  ScheduleExpression?: string;
  Duration?: string;
  AutomaticallyAfterDays?: number;
}
export interface HostedRotationLambda {
  RotationType: string;
  RotationLambdaName?: string;
  KmsKeyArn?: string;
  MasterSecretArn?: string;
  VpcSecurityGroupIds?: string;
  MasterSecretKmsKeyArn?: string;
  SuperuserSecretArn?: string;
  SuperuserSecretKmsKeyArn?: string;
  VpcSubnetIds?: string;
}