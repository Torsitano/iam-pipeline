/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SSM::ResourceDataSync
 */
export interface AwsSsmResourcedatasync {
  S3Destination?: S3Destination;
  KMSKeyArn?: string;
  SyncSource?: SyncSource;
  BucketName?: string;
  BucketRegion?: string;
  SyncFormat?: string;
  SyncName: string;
  SyncType?: string;
  BucketPrefix?: string;
}
export interface S3Destination {
  KMSKeyArn?: string;
  BucketPrefix?: string;
  BucketName: string;
  BucketRegion: string;
  SyncFormat: string;
}
export interface SyncSource {
  IncludeFutureRegions?: boolean;
  SourceRegions: string[];
  SourceType: string;
  AwsOrganizationsSource?: AwsOrganizationsSource;
}
export interface AwsOrganizationsSource {
  OrganizationalUnits?: string[];
  OrganizationSourceType: string;
}
