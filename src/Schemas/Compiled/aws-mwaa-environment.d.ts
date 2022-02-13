/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Customer-defined identifier for the environment, unique per customer region.
 */
export type EnvironmentName = string;
/**
 * ARN for the MWAA environment.
 */
export type EnvironmentArn = string;
/**
 * Url endpoint for the environment's Airflow UI.
 */
export type WebserverUrl = string;
/**
 * IAM role to be used by tasks.
 */
export type ExecutionRoleArn = string;
/**
 * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.
 *
 *     You can specify the CMK using any of the following:
 *
 *     Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.
 *
 *     Key alias. For example, alias/ExampleAlias.
 *
 *     Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
 *
 *     Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
 *
 *     AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
 */
export type KmsKey = string;
/**
 * Version of airflow to deploy to the environment.
 */
export type AirflowVersion = string;
/**
 * ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.
 */
export type S3BucketArn = string;
/**
 * Represents an S3 prefix relative to the root of an S3 bucket.
 */
export type RelativePath = string;
/**
 * Represents an version ID for an S3 object.
 */
export type S3ObjectVersion = string;
/**
 * Templated configuration for airflow processes and backing infrastructure.
 */
export type EnvironmentClass = string;
/**
 * Maximum worker compute units.
 */
export type MaxWorkers = number;
/**
 * Minimum worker compute units.
 */
export type MinWorkers = number;
/**
 * Scheduler compute units.
 */
export type Schedulers = number;
export type SubnetId = string;
export type SecurityGroupId = string;
export type LoggingEnabled = boolean;
export type LoggingLevel = "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG";
export type CloudWatchLogGroupArn = string;
/**
 * Start time for the weekly maintenance window.
 */
export type WeeklyMaintenanceWindowStart = string;
/**
 * Choice for mode of webserver access including over public internet or via private VPC endpoint.
 */
export type WebserverAccessMode = "PRIVATE_ONLY" | "PUBLIC_ONLY";

/**
 * Resource schema for AWS::MWAA::Environment
 */
export interface AwsMwaaEnvironment {
  Name: EnvironmentName;
  Arn?: EnvironmentArn;
  WebserverUrl?: WebserverUrl;
  ExecutionRoleArn?: ExecutionRoleArn;
  KmsKey?: KmsKey;
  AirflowVersion?: AirflowVersion;
  SourceBucketArn?: S3BucketArn;
  DagS3Path?: RelativePath;
  PluginsS3Path?: RelativePath;
  PluginsS3ObjectVersion?: S3ObjectVersion;
  RequirementsS3Path?: RelativePath;
  RequirementsS3ObjectVersion?: S3ObjectVersion;
  /**
   * Key/value pairs representing Airflow configuration variables.
   *     Keys are prefixed by their section:
   *
   *     [core]
   *     dags_folder={AIRFLOW_HOME}/dags
   *
   *     Would be represented as
   *
   *     "core.dags_folder": "{AIRFLOW_HOME}/dags"
   */
  AirflowConfigurationOptions?: {
    [k: string]: unknown;
  };
  EnvironmentClass?: EnvironmentClass;
  MaxWorkers?: MaxWorkers;
  MinWorkers?: MinWorkers;
  Schedulers?: Schedulers;
  NetworkConfiguration?: NetworkConfiguration;
  LoggingConfiguration?: LoggingConfiguration;
  WeeklyMaintenanceWindowStart?: WeeklyMaintenanceWindowStart;
  /**
   * A map of tags for the environment.
   */
  Tags?: {
    [k: string]: unknown;
  };
  WebserverAccessMode?: WebserverAccessMode;
}
/**
 * Configures the network resources of the environment.
 */
export interface NetworkConfiguration {
  /**
   * A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.
   */
  SubnetIds?: [SubnetId, SubnetId];
  /**
   * A list of security groups to use for the environment.
   */
  SecurityGroupIds?:
    | [SecurityGroupId]
    | [SecurityGroupId, SecurityGroupId]
    | [SecurityGroupId, SecurityGroupId, SecurityGroupId]
    | [SecurityGroupId, SecurityGroupId, SecurityGroupId, SecurityGroupId]
    | [SecurityGroupId, SecurityGroupId, SecurityGroupId, SecurityGroupId, SecurityGroupId];
}
/**
 * Logging configuration for the environment.
 */
export interface LoggingConfiguration {
  DagProcessingLogs?: ModuleLoggingConfiguration;
  SchedulerLogs?: ModuleLoggingConfiguration;
  WebserverLogs?: ModuleLoggingConfiguration;
  WorkerLogs?: ModuleLoggingConfiguration;
  TaskLogs?: ModuleLoggingConfiguration;
}
/**
 * Logging configuration for a specific airflow component.
 */
export interface ModuleLoggingConfiguration {
  Enabled?: LoggingEnabled;
  LogLevel?: LoggingLevel;
  CloudWatchLogGroupArn?: CloudWatchLogGroupArn;
}
