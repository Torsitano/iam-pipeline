/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::EFS::FileSystem
 */
export interface AwsEfsFilesystem {
  FileSystemId?: string;
  Arn?: string;
  Encrypted?: boolean;
  FileSystemTags?: ElasticFileSystemTag[];
  KmsKeyId?: string;
  LifecyclePolicies?: LifecyclePolicy[];
  PerformanceMode?: string;
  ProvisionedThroughputInMibps?: number;
  ThroughputMode?: string;
  FileSystemPolicy?: {
    [k: string]: unknown;
  };
  /**
   * Whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request to be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. Defaults to false
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
  BackupPolicy?: BackupPolicy;
  AvailabilityZoneName?: string;
}
export interface ElasticFileSystemTag {
  Key: string;
  Value: string;
}
export interface LifecyclePolicy {
  TransitionToIA?: string;
  TransitionToPrimaryStorageClass?: string;
}
export interface BackupPolicy {
  Status: string;
}