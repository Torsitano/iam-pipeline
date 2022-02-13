/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::MSK::Cluster
 */
export interface AwsMskCluster {
  BrokerNodeGroupInfo: BrokerNodeGroupInfo;
  EnhancedMonitoring?: string;
  KafkaVersion: string;
  NumberOfBrokerNodes: number;
  EncryptionInfo?: EncryptionInfo;
  OpenMonitoring?: OpenMonitoring;
  ClusterName: string;
  Id?: string;
  ClientAuthentication?: ClientAuthentication;
  LoggingInfo?: LoggingInfo;
  Tags?: {
    [k: string]: unknown;
  };
  ConfigurationInfo?: ConfigurationInfo;
}
export interface BrokerNodeGroupInfo {
  SecurityGroups?: string[];
  ClientSubnets: string[];
  ConnectivityInfo?: ConnectivityInfo;
  StorageInfo?: StorageInfo;
  BrokerAZDistribution?: string;
  InstanceType: string;
}
export interface ConnectivityInfo {
  PublicAccess?: PublicAccess;
}
export interface PublicAccess {
  Type?: string;
}
export interface StorageInfo {
  EBSStorageInfo?: EBSStorageInfo;
}
export interface EBSStorageInfo {
  VolumeSize?: number;
  ProvisionedThroughput?: ProvisionedThroughput;
}
export interface ProvisionedThroughput {
  Enabled?: boolean;
  VolumeThroughput?: number;
}
export interface EncryptionInfo {
  EncryptionAtRest?: EncryptionAtRest;
  EncryptionInTransit?: EncryptionInTransit;
}
export interface EncryptionAtRest {
  DataVolumeKMSKeyId: string;
}
export interface EncryptionInTransit {
  InCluster?: boolean;
  ClientBroker?: string;
}
export interface OpenMonitoring {
  Prometheus: Prometheus;
}
export interface Prometheus {
  JmxExporter?: JmxExporter;
  NodeExporter?: NodeExporter;
}
export interface JmxExporter {
  EnabledInBroker: boolean;
}
export interface NodeExporter {
  EnabledInBroker: boolean;
}
export interface ClientAuthentication {
  Sasl?: Sasl;
  Tls?: Tls;
  Unauthenticated?: Unauthenticated;
}
export interface Sasl {
  Iam?: Iam;
  Scram?: Scram;
}
export interface Iam {
  Enabled: boolean;
}
export interface Scram {
  Enabled: boolean;
}
export interface Tls {
  Enabled?: boolean;
  CertificateAuthorityArnList?: string[];
}
export interface Unauthenticated {
  Enabled: boolean;
}
export interface LoggingInfo {
  BrokerLogs: BrokerLogs;
}
export interface BrokerLogs {
  S3?: S3;
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
}
export interface S3 {
  Enabled: boolean;
  Prefix?: string;
  Bucket?: string;
}
export interface CloudWatchLogs {
  LogGroup?: string;
  Enabled: boolean;
}
export interface Firehose {
  Enabled: boolean;
  DeliveryStream?: string;
}
export interface ConfigurationInfo {
  Revision: number;
  Arn: string;
}
