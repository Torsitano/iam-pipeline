/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The Amazon Resource Name used in the creation of the Data Store.
 */
export type DatastoreArn = string;
/**
 * The AWS endpoint for the Data Store. Each Data Store will have it's own endpoint with Data Store ID in the endpoint URL.
 */
export type DatastoreEndpoint = string;
/**
 * The AWS-generated ID number for the Data Store.
 */
export type DatastoreId = string;
/**
 * The user-generated name for the Data Store.
 */
export type DatastoreName = string;
/**
 * The status of the Data Store. Possible statuses are 'CREATING', 'ACTIVE', 'DELETING', or 'DELETED'.
 */
export type DatastoreStatus = "CREATING" | "ACTIVE" | "DELETING" | "DELETED";
/**
 * The FHIR version. Only R4 version data is supported.
 */
export type DatastoreTypeVersion = "R4";

/**
 * HealthLake FHIR Datastore
 */
export interface AwsHealthlakeFhirdatastore {
  CreatedAt?: CreatedAt;
  DatastoreArn?: DatastoreArn;
  DatastoreEndpoint?: DatastoreEndpoint;
  DatastoreId?: DatastoreId;
  DatastoreName?: DatastoreName;
  DatastoreStatus?: DatastoreStatus;
  DatastoreTypeVersion: DatastoreTypeVersion;
  PreloadDataConfig?: PreloadDataConfig;
  SseConfiguration?: SseConfiguration;
  Tags?: Tag[];
}
/**
 * The time that a Data Store was created.
 */
export interface CreatedAt {
  /**
   * Seconds since epoch.
   */
  Seconds: string;
  /**
   * Nanoseconds.
   */
  Nanos: number;
}
/**
 * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
 */
export interface PreloadDataConfig {
  /**
   * The type of preloaded data. Only Synthea preloaded data is supported.
   */
  PreloadDataType: "SYNTHEA";
}
/**
 * The server-side encryption key configuration for a customer provided encryption key.
 */
export interface SseConfiguration {
  KmsEncryptionConfig: KmsEncryptionConfig;
}
/**
 * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
 */
export interface KmsEncryptionConfig {
  /**
   * The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
   */
  CmkType: "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KMS_KEY";
  /**
   * The KMS encryption key id/alias used to encrypt the Data Store contents at rest.
   */
  KmsKeyId?: string;
}
/**
 * A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
 */
export interface Tag {
  /**
   * The key of the tag.
   */
  Key: string;
  /**
   * The value of the tag.
   */
  Value: string;
}
