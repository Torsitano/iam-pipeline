/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SES::ReceiptRule
 */
export interface AwsSesReceiptrule {
  Id?: string;
  After?: string;
  Rule: Rule;
  RuleSetName: string;
}
export interface Rule {
  ScanEnabled?: boolean;
  Recipients?: string[];
  Actions?: Action[];
  Enabled?: boolean;
  Name?: string;
  TlsPolicy?: string;
}
export interface Action {
  BounceAction?: BounceAction;
  S3Action?: S3Action;
  StopAction?: StopAction;
  SNSAction?: SNSAction;
  WorkmailAction?: WorkmailAction;
  AddHeaderAction?: AddHeaderAction;
  LambdaAction?: LambdaAction;
}
export interface BounceAction {
  Sender: string;
  SmtpReplyCode: string;
  Message: string;
  TopicArn?: string;
  StatusCode?: string;
}
export interface S3Action {
  BucketName: string;
  KmsKeyArn?: string;
  TopicArn?: string;
  ObjectKeyPrefix?: string;
}
export interface StopAction {
  Scope: string;
  TopicArn?: string;
}
export interface SNSAction {
  TopicArn?: string;
  Encoding?: string;
}
export interface WorkmailAction {
  TopicArn?: string;
  OrganizationArn: string;
}
export interface AddHeaderAction {
  HeaderValue: string;
  HeaderName: string;
}
export interface LambdaAction {
  FunctionArn: string;
  TopicArn?: string;
  InvocationType?: string;
}
