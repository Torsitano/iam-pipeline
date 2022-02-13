/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WorkSpaces::Workspace
 */
export interface AwsWorkspacesWorkspace {
  Id?: string;
  BundleId: string;
  DirectoryId: string;
  RootVolumeEncryptionEnabled?: boolean;
  Tags?: Tag[];
  UserName: string;
  UserVolumeEncryptionEnabled?: boolean;
  VolumeEncryptionKey?: string;
  WorkspaceProperties?: WorkspaceProperties;
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface WorkspaceProperties {
  ComputeTypeName?: string;
  RootVolumeSizeGib?: number;
  RunningMode?: string;
  RunningModeAutoStopTimeoutInMinutes?: number;
  UserVolumeSizeGib?: number;
}
