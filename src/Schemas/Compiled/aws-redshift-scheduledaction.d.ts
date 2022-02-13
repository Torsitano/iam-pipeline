/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Timestamp = string;

/**
 * The `AWS::Redshift::ScheduledAction` resource creates an Amazon Redshift Scheduled Action.
 */
export interface AwsRedshiftScheduledaction {
  /**
   * The name of the scheduled action. The name must be unique within an account.
   */
  ScheduledActionName: string;
  /**
   * A JSON format string of the Amazon Redshift API operation with input parameters.
   */
  TargetAction?: {
    ResizeCluster?: ResizeClusterMessage;
    PauseCluster?: PauseClusterMessage;
    ResumeCluster?: ResumeClusterMessage;
  };
  /**
   * The schedule in `at( )` or `cron( )` format.
   */
  Schedule?: string;
  /**
   * The IAM role to assume to run the target action.
   */
  IamRole?: string;
  /**
   * The description of the scheduled action.
   */
  ScheduledActionDescription?: string;
  /**
   * The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
   */
  StartTime?: string;
  /**
   * The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
   */
  EndTime?: string;
  /**
   * If true, the schedule is enabled. If false, the scheduled action does not trigger.
   */
  Enable?: boolean;
  /**
   * The state of the scheduled action.
   */
  State?: "ACTIVE" | "DISABLED";
  /**
   * List of times when the scheduled action will run.
   */
  NextInvocations?: Timestamp[];
}
/**
 * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
 */
export interface ResizeClusterMessage {
  ClusterIdentifier: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  Classic?: boolean;
}
/**
 * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
 */
export interface PauseClusterMessage {
  ClusterIdentifier: string;
}
/**
 * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
 */
export interface ResumeClusterMessage {
  ClusterIdentifier: string;
}
