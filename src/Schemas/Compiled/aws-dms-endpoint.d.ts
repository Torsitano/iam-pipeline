/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::DMS::Endpoint
 */
export interface AwsDmsEndpoint {
  SybaseSettings?: SybaseSettings;
  RedisSettings?: RedisSettings;
  OracleSettings?: OracleSettings;
  KafkaSettings?: KafkaSettings;
  Port?: number;
  MySqlSettings?: MySqlSettings;
  S3Settings?: S3Settings;
  ResourceIdentifier?: string;
  KinesisSettings?: KinesisSettings;
  SslMode?: string;
  RedshiftSettings?: RedshiftSettings;
  EndpointType: string;
  Tags?: Tag[];
  Password?: string;
  MongoDbSettings?: MongoDbSettings;
  IbmDb2Settings?: IbmDb2Settings;
  KmsKeyId?: string;
  ExternalId?: string;
  DatabaseName?: string;
  NeptuneSettings?: NeptuneSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  EngineName: string;
  DocDbSettings?: DocDbSettings;
  DynamoDbSettings?: DynamoDbSettings;
  Username?: string;
  MicrosoftSqlServerSettings?: MicrosoftSqlServerSettings;
  GcpMySQLSettings?: GcpMySQLSettings;
  ServerName?: string;
  ExtraConnectionAttributes?: string;
  Id?: string;
  EndpointIdentifier?: string;
  CertificateArn?: string;
  PostgreSqlSettings?: PostgreSqlSettings;
}
export interface SybaseSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface RedisSettings {
  SslSecurityProtocol?: string;
  AuthUserName?: string;
  ServerName?: string;
  Port?: number;
  SslCaCertificateArn?: string;
  AuthPassword?: string;
  AuthType?: string;
}
export interface OracleSettings {
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerOracleAsmSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
}
export interface KafkaSettings {
  Broker?: string;
  SaslPassword?: string;
  SslClientCertificateArn?: string;
  IncludeTransactionDetails?: boolean;
  SecurityProtocol?: string;
  IncludeTableAlterOperations?: boolean;
  SslCaCertificateArn?: string;
  IncludeControlDetails?: boolean;
  NoHexPrefix?: boolean;
  SslClientKeyArn?: string;
  SslClientKeyPassword?: string;
  SaslUserName?: string;
  Topic?: string;
  PartitionIncludeSchemaTable?: boolean;
  IncludeNullAndEmpty?: boolean;
}
export interface MySqlSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface S3Settings {
  TimestampColumnName?: string;
  EnableStatistics?: boolean;
  DatePartitionSequence?: string;
  IncludeOpForFullLoad?: boolean;
  CsvNullValue?: string;
  CdcInsertsAndUpdates?: boolean;
  BucketName?: string;
  ServerSideEncryptionKmsKeyId?: string;
  UseTaskStartTimeForFullLoadTimestamp?: boolean;
  DataFormat?: string;
  CsvDelimiter?: string;
  IgnoreHeaderRows?: number;
  CannedAclForObjects?: string;
  Rfc4180?: boolean;
  ServiceAccessRoleArn?: string;
  ParquetTimestampInMillisecond?: boolean;
  PreserveTransactions?: boolean;
  BucketFolder?: string;
  DatePartitionDelimiter?: string;
  EncodingType?: string;
  ParquetVersion?: string;
  AddColumnName?: boolean;
  CdcMinFileSize?: number;
  ExternalTableDefinition?: string;
  UseCsvNoSupValue?: boolean;
  MaxFileSize?: number;
  CsvNoSupValue?: string;
  CdcPath?: string;
  CsvRowDelimiter?: string;
  RowGroupLength?: number;
  CdcMaxBatchInterval?: number;
  DataPageSize?: number;
  DictPageSizeLimit?: number;
  DatePartitionEnabled?: boolean;
  CompressionType?: string;
  DatePartitionTimezone?: string;
  CdcInsertsOnly?: boolean;
  EncryptionMode?: string;
}
export interface KinesisSettings {
  MessageFormat?: string;
  IncludeTransactionDetails?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeControlDetails?: boolean;
  StreamArn?: string;
  ServiceAccessRoleArn?: string;
  NoHexPrefix?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  IncludeNullAndEmpty?: boolean;
}
export interface RedshiftSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface Tag {
  Value: string;
  Key: string;
}
export interface MongoDbSettings {
  Port?: number;
  ExtractDocId?: string;
  DatabaseName?: string;
  AuthSource?: string;
  AuthMechanism?: string;
  Username?: string;
  DocsToInvestigate?: string;
  ServerName?: string;
  SecretsManagerSecretId?: string;
  AuthType?: string;
  SecretsManagerAccessRoleArn?: string;
  Password?: string;
  NestingLevel?: string;
}
export interface IbmDb2Settings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface NeptuneSettings {
  MaxRetryCount?: number;
  MaxFileSize?: number;
  S3BucketFolder?: string;
  ErrorRetryDuration?: number;
  IamAuthEnabled?: boolean;
  S3BucketName?: string;
  ServiceAccessRoleArn?: string;
}
export interface ElasticsearchSettings {
  EndpointUri?: string;
  ErrorRetryDuration?: number;
  FullLoadErrorPercentage?: number;
  ServiceAccessRoleArn?: string;
}
export interface DocDbSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface DynamoDbSettings {
  ServiceAccessRoleArn?: string;
}
export interface MicrosoftSqlServerSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}
export interface GcpMySQLSettings {
  AfterConnectScript?: string;
  Port?: number;
  DatabaseName?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  ServerTimezone?: string;
  EventsPollInterval?: number;
  ParallelLoadThreads?: number;
  Username?: string;
  MaxFileSize?: number;
  ServerName?: string;
  SecretsManagerSecretId?: string;
  SecretsManagerAccessRoleArn?: string;
  Password?: string;
}
export interface PostgreSqlSettings {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
}