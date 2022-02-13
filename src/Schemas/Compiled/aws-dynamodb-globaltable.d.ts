/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable
 */
export interface AwsDynamodbGlobaltable {
  Arn?: string;
  StreamArn?: string;
  AttributeDefinitions: [AttributeDefinition, ...AttributeDefinition[]];
  BillingMode?: string;
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
  KeySchema: [KeySchema] | [KeySchema, KeySchema];
  LocalSecondaryIndexes?: LocalSecondaryIndex[];
  WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
  Replicas: [ReplicaSpecification, ...ReplicaSpecification[]];
  SSESpecification?: SSESpecification;
  StreamSpecification?: StreamSpecification;
  TableName?: string;
  TableId?: string;
  TimeToLiveSpecification?: TimeToLiveSpecification;
}
export interface AttributeDefinition {
  AttributeName: string;
  AttributeType: string;
}
export interface GlobalSecondaryIndex {
  IndexName: string;
  KeySchema: [KeySchema] | [KeySchema, KeySchema];
  Projection: Projection;
  WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
}
export interface KeySchema {
  AttributeName: string;
  KeyType: string;
}
export interface Projection {
  NonKeyAttributes?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
  ProjectionType?: string;
}
export interface WriteProvisionedThroughputSettings {
  WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
}
export interface CapacityAutoScalingSettings {
  MinCapacity: number;
  MaxCapacity: number;
  SeedCapacity?: number;
  TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
}
export interface TargetTrackingScalingPolicyConfiguration {
  DisableScaleIn?: boolean;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  TargetValue: number;
}
export interface LocalSecondaryIndex {
  IndexName: string;
  KeySchema: [] | [KeySchema] | [KeySchema, KeySchema];
  Projection: Projection;
}
export interface ReplicaSpecification {
  Region: string;
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexSpecification[];
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
  TableClass?: string;
  SSESpecification?: ReplicaSSESpecification;
  Tags?: Tag[];
  ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
}
export interface ReplicaGlobalSecondaryIndexSpecification {
  IndexName: string;
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
}
export interface ContributorInsightsSpecification {
  Enabled: boolean;
}
export interface ReadProvisionedThroughputSettings {
  ReadCapacityUnits?: number;
  ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
}
export interface PointInTimeRecoverySpecification {
  PointInTimeRecoveryEnabled?: boolean;
}
export interface ReplicaSSESpecification {
  KMSMasterKeyId: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface SSESpecification {
  SSEEnabled: boolean;
  SSEType?: string;
}
export interface StreamSpecification {
  StreamViewType: string;
}
export interface TimeToLiveSpecification {
  AttributeName?: string;
  Enabled: boolean;
}
