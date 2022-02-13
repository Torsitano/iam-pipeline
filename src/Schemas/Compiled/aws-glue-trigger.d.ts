/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Glue::Trigger
 */
export interface AwsGlueTrigger {
  Id?: string;
  Type: string;
  StartOnCreation?: boolean;
  Description?: string;
  Actions: Action[];
  WorkflowName?: string;
  Schedule?: string;
  Tags?: {
    [k: string]: unknown;
  };
  Name?: string;
  Predicate?: Predicate;
}
export interface Action {
  NotificationProperty?: NotificationProperty;
  CrawlerName?: string;
  Timeout?: number;
  JobName?: string;
  Arguments?: {
    [k: string]: unknown;
  };
  SecurityConfiguration?: string;
}
export interface NotificationProperty {
  NotifyDelayAfter?: number;
}
export interface Predicate {
  Logical?: string;
  Conditions?: Condition[];
}
export interface Condition {
  CrawlerName?: string;
  State?: string;
  CrawlState?: string;
  LogicalOperator?: string;
  JobName?: string;
}