/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Config::ConfigRule
 */
export interface AwsConfigConfigrule {
  ConfigRuleId?: string;
  Description?: string;
  Scope?: Scope;
  ComplianceType?: string;
  ConfigRuleName?: string;
  Arn?: string;
  MaximumExecutionFrequency?: string;
  Source: Source;
  InputParameters?: {
    [k: string]: unknown;
  };
}
export interface Scope {
  TagKey?: string;
  ComplianceResourceTypes?: string[];
  TagValue?: string;
  ComplianceResourceId?: string;
}
export interface Source {
  SourceIdentifier: string;
  Owner: string;
  SourceDetails?: SourceDetail[];
}
export interface SourceDetail {
  EventSource: string;
  MaximumExecutionFrequency?: string;
  MessageType: string;
}
