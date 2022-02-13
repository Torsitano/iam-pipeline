/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
 */
export type BytesScannedCutoffPerQuery = number;
/**
 * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
 */
export type EnforceWorkGroupConfiguration = boolean;
/**
 * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
 */
export type PublishCloudWatchMetricsEnabled = boolean;
/**
 * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
 */
export type RequesterPaysEnabled = boolean;
/**
 * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
 */
export type EncryptionOption = "SSE_S3" | "SSE_KMS" | "CSE_KMS";
/**
 * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
 */
export type KmsKey = string;
/**
 * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
 */
export type OutputLocation = string;
/**
 * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
 */
export type SelectedEngineVersion = string;
/**
 * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored.
 */
export type EffectiveEngineVersion = string;
export type RemoveEncryptionConfiguration = boolean;
export type RemoveOutputLocation = boolean;
/**
 * Indicates that the data usage control limit per query is removed.
 */
export type RemoveBytesScannedCutoffPerQuery = boolean;

/**
 * Resource schema for AWS::Athena::WorkGroup
 */
export interface AwsAthenaWorkgroup {
  /**
   * The workGroup name.
   */
  Name: string;
  /**
   * The workgroup description.
   */
  Description?: string;
  /**
   * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
   */
  Tags?: Tag[];
  /**
   * The workgroup configuration
   */
  WorkGroupConfiguration?: {
    BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQuery;
    EnforceWorkGroupConfiguration?: EnforceWorkGroupConfiguration;
    PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabled;
    RequesterPaysEnabled?: RequesterPaysEnabled;
    ResultConfiguration?: ResultConfiguration;
    EngineVersion?: EngineVersion;
  };
  /**
   * The workgroup configuration update object
   */
  WorkGroupConfigurationUpdates?: {
    BytesScannedCutoffPerQuery?: BytesScannedCutoffPerQuery;
    EnforceWorkGroupConfiguration?: EnforceWorkGroupConfiguration;
    PublishCloudWatchMetricsEnabled?: PublishCloudWatchMetricsEnabled;
    RequesterPaysEnabled?: RequesterPaysEnabled;
    ResultConfigurationUpdates?: ResultConfigurationUpdates;
    RemoveBytesScannedCutoffPerQuery?: RemoveBytesScannedCutoffPerQuery;
    EngineVersion?: EngineVersion;
  };
  /**
   * The date and time the workgroup was created.
   */
  CreationTime?: string;
  /**
   * The state of the workgroup: ENABLED or DISABLED.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
   */
  RecursiveDeleteOption?: boolean;
}
export interface Tag {
  Key: string;
  Value: string;
}
/**
 * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
 *
 */
export interface ResultConfiguration {
  EncryptionConfiguration?: EncryptionConfiguration;
  OutputLocation?: OutputLocation;
}
/**
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
 */
export interface EncryptionConfiguration {
  EncryptionOption: EncryptionOption;
  KmsKey?: KmsKey;
}
/**
 * The Athena engine version for running queries.
 */
export interface EngineVersion {
  SelectedEngineVersion?: SelectedEngineVersion;
  EffectiveEngineVersion?: EffectiveEngineVersion;
}
/**
 * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
 */
export interface ResultConfigurationUpdates {
  EncryptionConfiguration?: EncryptionConfiguration;
  OutputLocation?: OutputLocation;
  RemoveEncryptionConfiguration?: RemoveEncryptionConfiguration;
  RemoveOutputLocation?: RemoveOutputLocation;
}
