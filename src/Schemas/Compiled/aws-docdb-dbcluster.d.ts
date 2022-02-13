/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::DocDB::DBCluster
 */
export interface AwsDocdbDbcluster {
  StorageEncrypted?: boolean;
  EngineVersion?: string;
  KmsKeyId?: string;
  AvailabilityZones?: string[];
  SnapshotIdentifier?: string;
  Port?: number;
  DBClusterIdentifier?: string;
  PreferredMaintenanceWindow?: string;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  PreferredBackupWindow?: string;
  MasterUserPassword: string;
  ClusterResourceId?: string;
  Endpoint?: string;
  VpcSecurityGroupIds?: string[];
  MasterUsername: string;
  ReadEndpoint?: string;
  DBClusterParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  Id?: string;
  Tags?: Tag[];
  EnableCloudwatchLogsExports?: string[];
}
export interface Tag {
  Value: string;
  Key: string;
}
