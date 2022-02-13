/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS region name.
 */
export type RegionName = string;
/**
 * The ARN of the ReplicationSet.
 */
export type Arn = string;

/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet
 */
export interface AwsSsmincidentsReplicationset {
  /**
   * The ARN of the ReplicationSet.
   */
  Arn?: string;
  /**
   * The ReplicationSet configuration.
   */
  Regions:
    | [ReplicationRegion]
    | [ReplicationRegion, ReplicationRegion]
    | [ReplicationRegion, ReplicationRegion, ReplicationRegion];
  /**
   * Configures the ReplicationSet deletion protection.
   */
  DeletionProtected?: boolean;
}
/**
 * The ReplicationSet regional configuration.
 */
export interface ReplicationRegion {
  RegionName?: RegionName;
  RegionConfiguration?: RegionConfiguration;
}
/**
 * The ReplicationSet regional configuration.
 */
export interface RegionConfiguration {
  SseKmsKeyId: Arn;
}
