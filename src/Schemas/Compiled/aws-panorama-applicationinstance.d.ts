/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Name = string;
export type Description = string;
export type ManifestPayloadData = string;
export type ManifestOverridesPayloadData = string;
export type RuntimeRoleArn = string;
export type DefaultRuntimeContextDevice = string;
export type DeviceName = string;
export type ApplicationInstanceId = string;
export type DeviceId = string;
export type StatusFilter =
  | "DEPLOYMENT_SUCCEEDED"
  | "DEPLOYMENT_ERROR"
  | "REMOVAL_SUCCEEDED"
  | "REMOVAL_FAILED"
  | "PROCESSING_DEPLOYMENT"
  | "PROCESSING_REMOVAL";
export type ApplicationInstanceStatus =
  | "DEPLOYMENT_PENDING"
  | "DEPLOYMENT_REQUESTED"
  | "DEPLOYMENT_IN_PROGRESS"
  | "DEPLOYMENT_ERROR"
  | "DEPLOYMENT_SUCCEEDED"
  | "REMOVAL_PENDING"
  | "REMOVAL_REQUESTED"
  | "REMOVAL_IN_PROGRESS"
  | "REMOVAL_FAILED"
  | "REMOVAL_SUCCEEDED";
export type ApplicationInstanceHealthStatus = "RUNNING" | "ERROR" | "NOT_AVAILABLE";
export type ApplicationInstanceStatusDescription = string;
export type Timestamp = number;
export type ApplicationInstanceArn = string;
/**
 * List of tags
 */
export type TagList = Tag[];

/**
 * Schema for ApplicationInstance CloudFormation Resource
 */
export interface AwsPanoramaApplicationinstance {
  Name?: Name;
  Description?: Description;
  ManifestPayload: ManifestPayload;
  ManifestOverridesPayload?: ManifestOverridesPayload;
  RuntimeRoleArn?: RuntimeRoleArn;
  DefaultRuntimeContextDevice: DefaultRuntimeContextDevice;
  DefaultRuntimeContextDeviceName?: DeviceName;
  ApplicationInstanceId?: ApplicationInstanceId;
  ApplicationInstanceIdToReplace?: ApplicationInstanceId;
  DeviceId?: DeviceId;
  StatusFilter?: StatusFilter;
  Status?: ApplicationInstanceStatus;
  HealthStatus?: ApplicationInstanceHealthStatus;
  StatusDescription?: ApplicationInstanceStatusDescription;
  CreatedTime?: Timestamp;
  LastUpdatedTime?: Timestamp;
  Arn?: ApplicationInstanceArn;
  Tags?: TagList;
}
export interface ManifestPayload {
  PayloadData?: ManifestPayloadData;
}
export interface ManifestOverridesPayload {
  PayloadData?: ManifestOverridesPayloadData;
}
export interface Tag {
  /**
   * A string used to identify this tag
   */
  Key: string;
  /**
   * A string containing the value for the tag
   */
  Value: string;
}