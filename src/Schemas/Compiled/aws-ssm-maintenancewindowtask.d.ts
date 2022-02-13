/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTask
 */
export interface AwsSsmMaintenancewindowtask {
  MaxErrors?: string;
  Description?: string;
  ServiceRoleArn?: string;
  Priority: number;
  MaxConcurrency?: string;
  Targets?: Target[];
  Name?: string;
  TaskArn: string;
  TaskInvocationParameters?: TaskInvocationParameters;
  WindowId: string;
  TaskParameters?: {
    [k: string]: unknown;
  };
  TaskType: string;
  CutoffBehavior?: string;
  Id?: string;
  LoggingInfo?: LoggingInfo;
}
export interface Target {
  Values: string[];
  Key: string;
}
export interface TaskInvocationParameters {
  MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters;
  MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters;
  MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters;
  MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters;
}
export interface MaintenanceWindowStepFunctionsParameters {
  Input?: string;
  Name?: string;
}
export interface MaintenanceWindowRunCommandParameters {
  TimeoutSeconds?: number;
  Comment?: string;
  OutputS3KeyPrefix?: string;
  Parameters?: {
    [k: string]: unknown;
  };
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
  DocumentHashType?: string;
  ServiceRoleArn?: string;
  NotificationConfig?: NotificationConfig;
  DocumentVersion?: string;
  OutputS3BucketName?: string;
  DocumentHash?: string;
}
export interface CloudWatchOutputConfig {
  CloudWatchOutputEnabled?: boolean;
  CloudWatchLogGroupName?: string;
}
export interface NotificationConfig {
  NotificationEvents?: string[];
  NotificationArn: string;
  NotificationType?: string;
}
export interface MaintenanceWindowLambdaParameters {
  Qualifier?: string;
  Payload?: string;
  ClientContext?: string;
}
export interface MaintenanceWindowAutomationParameters {
  Parameters?: {
    [k: string]: unknown;
  };
  DocumentVersion?: string;
}
export interface LoggingInfo {
  Region: string;
  S3Prefix?: string;
  S3Bucket: string;
}
