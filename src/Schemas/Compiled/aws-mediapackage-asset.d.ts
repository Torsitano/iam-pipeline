/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::MediaPackage::Asset
 */
export interface AwsMediapackageAsset {
  /**
   * The ARN of the Asset.
   */
  Arn?: string;
  /**
   * The time the Asset was initially submitted for Ingest.
   */
  CreatedAt?: string;
  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: EgressEndpoint[];
  /**
   * The unique identifier for the Asset.
   */
  Id: string;
  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId: string;
  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;
  /**
   * ARN of the source object in S3.
   */
  SourceArn: string;
  /**
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
}
/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface EgressEndpoint {
  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId: string;
  /**
   * The URL of the parent manifest for the repackaged Asset.
   */
  Url: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
