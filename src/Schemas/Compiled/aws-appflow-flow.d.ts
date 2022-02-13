/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Object = string;
export type BucketName = string;
export type BucketPrefix = string;
export type EnableDynamicFieldUpdate = boolean;
export type IncludeDeletedRecords = boolean;
export type DocumentType = string;
export type IncludeSourceFiles = boolean;
export type IncludeRenditions = boolean;
export type IncludeAllVersions = boolean;
/**
 * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
 */
export type DatetimeTypeFieldName = string;
export type FileType = "CSV" | "JSON" | "PARQUET";
export type PrefixType = "FILENAME" | "PATH" | "PATH_AND_FILENAME";
export type PrefixFormat = "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE";
export type AggregationType = "None" | "SingleFile";
export type WriteOperationType = "INSERT" | "UPSERT" | "UPDATE";
export type UpsolverBucketName = string;
export type AmplitudeConnectorOperator = "BETWEEN";
export type DatadogConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type DynatraceConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type GoogleAnalyticsConnectorOperator = "PROJECTION" | "BETWEEN";
export type InforNexusConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type SAPODataConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type SingularConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type SlackConnectorOperator =
  | "PROJECTION"
  | "BETWEEN"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type TrendmicroConnectorOperator =
  | "PROJECTION"
  | "EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type VeevaConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP";
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP"
  | "EXCLUDE_SOURCE_FIELDS_LIST";

/**
 * Resource schema for AWS::AppFlow::Flow.
 */
export interface AwsAppflowFlow {
  /**
   * ARN identifier of the flow.
   */
  FlowArn?: string;
  /**
   * Name of the flow.
   */
  FlowName: string;
  /**
   * Description of the flow.
   */
  Description?: string;
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
   */
  KMSArn?: string;
  /**
   * Trigger settings of the flow.
   */
  TriggerConfig: {
    /**
     * Trigger type of the flow
     */
    TriggerType: "Scheduled" | "Event" | "OnDemand";
    /**
     * Details required based on the type of trigger
     */
    TriggerProperties?: {
      ScheduleExpression: string;
      DataPullMode?: "Incremental" | "Complete";
      ScheduleStartTime?: number;
      ScheduleEndTime?: number;
      TimeZone?: string;
      ScheduleOffset?: number;
    };
  };
  /**
   * Configurations of Source connector of the flow.
   */
  SourceFlowConfig: {
    /**
     * Type of source connector
     */
    ConnectorType:
      | "SAPOData"
      | "Salesforce"
      | "Singular"
      | "Slack"
      | "Redshift"
      | "S3"
      | "Marketo"
      | "Googleanalytics"
      | "Zendesk"
      | "Servicenow"
      | "Datadog"
      | "Trendmicro"
      | "Snowflake"
      | "Dynatrace"
      | "Infornexus"
      | "Amplitude"
      | "Veeva"
      | "EventBridge"
      | "Upsolver"
      | "LookoutMetrics";
    /**
     * Name of source connector profile
     */
    ConnectorProfileName?: string;
    /**
     * Source connector details required to query a connector
     */
    SourceConnectorProperties: {
      Amplitude?: AmplitudeSourceProperties;
      Datadog?: DatadogSourceProperties;
      Dynatrace?: DynatraceSourceProperties;
      GoogleAnalytics?: GoogleAnalyticsSourceProperties;
      InforNexus?: InforNexusSourceProperties;
      Marketo?: MarketoSourceProperties;
      S3?: S3SourceProperties;
      SAPOData?: SAPODataSourceProperties;
      Salesforce?: SalesforceSourceProperties;
      ServiceNow?: ServiceNowSourceProperties;
      Singular?: SingularSourceProperties;
      Slack?: SlackSourceProperties;
      Trendmicro?: TrendmicroSourceProperties;
      Veeva?: VeevaSourceProperties;
      Zendesk?: ZendeskSourceProperties;
      [k: string]: unknown;
    };
    /**
     * Configuration for scheduled incremental data pull
     */
    IncrementalPullConfig?: {
      DatetimeTypeFieldName?: DatetimeTypeFieldName;
      [k: string]: unknown;
    };
  };
  /**
   * List of Destination connectors of the flow.
   */
  DestinationFlowConfigList: DestinationFlowConfig[];
  /**
   * List of tasks for the flow.
   */
  Tasks: Task[];
  /**
   * List of Tags.
   */
  Tags?: Tag[];
}
export interface AmplitudeSourceProperties {
  Object: Object;
}
export interface DatadogSourceProperties {
  Object: Object;
}
export interface DynatraceSourceProperties {
  Object: Object;
}
export interface GoogleAnalyticsSourceProperties {
  Object: Object;
}
export interface InforNexusSourceProperties {
  Object: Object;
}
export interface MarketoSourceProperties {
  Object: Object;
}
export interface S3SourceProperties {
  BucketName: BucketName;
  BucketPrefix: BucketPrefix;
  S3InputFormatConfig?: S3InputFormatConfig;
}
export interface S3InputFormatConfig {
  S3InputFileType?: "CSV" | "JSON";
  [k: string]: unknown;
}
export interface SAPODataSourceProperties {
  ObjectPath: Object;
}
export interface SalesforceSourceProperties {
  Object: Object;
  EnableDynamicFieldUpdate?: EnableDynamicFieldUpdate;
  IncludeDeletedRecords?: IncludeDeletedRecords;
}
export interface ServiceNowSourceProperties {
  Object: Object;
}
export interface SingularSourceProperties {
  Object: Object;
}
export interface SlackSourceProperties {
  Object: Object;
}
export interface TrendmicroSourceProperties {
  Object: Object;
}
export interface VeevaSourceProperties {
  Object: Object;
  DocumentType?: DocumentType;
  IncludeSourceFiles?: IncludeSourceFiles;
  IncludeRenditions?: IncludeRenditions;
  IncludeAllVersions?: IncludeAllVersions;
}
export interface ZendeskSourceProperties {
  Object: Object;
}
/**
 * Configurations of destination connector.
 */
export interface DestinationFlowConfig {
  /**
   * Destination connector type
   */
  ConnectorType:
    | "SAPOData"
    | "Salesforce"
    | "Singular"
    | "Slack"
    | "Redshift"
    | "S3"
    | "Marketo"
    | "Googleanalytics"
    | "Zendesk"
    | "Servicenow"
    | "Datadog"
    | "Trendmicro"
    | "Snowflake"
    | "Dynatrace"
    | "Infornexus"
    | "Amplitude"
    | "Veeva"
    | "EventBridge"
    | "Upsolver"
    | "LookoutMetrics";
  /**
   * Name of destination connector profile
   */
  ConnectorProfileName?: string;
  /**
   * Destination connector details
   */
  DestinationConnectorProperties: {
    Redshift?: RedshiftDestinationProperties;
    S3?: S3DestinationProperties;
    Salesforce?: SalesforceDestinationProperties;
    Snowflake?: SnowflakeDestinationProperties;
    EventBridge?: EventBridgeDestinationProperties;
    Upsolver?: UpsolverDestinationProperties;
    LookoutMetrics?: LookoutMetricsDestinationProperties;
    Zendesk?: ZendeskDestinationProperties;
    [k: string]: unknown;
  };
}
export interface RedshiftDestinationProperties {
  Object: Object;
  IntermediateBucketName: BucketName;
  BucketPrefix?: BucketPrefix;
  ErrorHandlingConfig?: ErrorHandlingConfig;
}
export interface ErrorHandlingConfig {
  FailOnFirstError?: boolean;
  BucketPrefix?: BucketPrefix;
  BucketName?: BucketName;
}
export interface S3DestinationProperties {
  BucketName: BucketName;
  BucketPrefix?: BucketPrefix;
  S3OutputFormatConfig?: S3OutputFormatConfig;
}
export interface S3OutputFormatConfig {
  FileType?: FileType;
  PrefixConfig?: PrefixConfig;
  AggregationConfig?: AggregationConfig;
}
export interface PrefixConfig {
  PrefixType?: PrefixType;
  PrefixFormat?: PrefixFormat;
}
export interface AggregationConfig {
  AggregationType?: AggregationType;
  [k: string]: unknown;
}
export interface SalesforceDestinationProperties {
  Object: Object;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  WriteOperationType?: WriteOperationType;
}
export interface SnowflakeDestinationProperties {
  Object: Object;
  IntermediateBucketName: BucketName;
  BucketPrefix?: BucketPrefix;
  ErrorHandlingConfig?: ErrorHandlingConfig;
}
export interface EventBridgeDestinationProperties {
  Object: Object;
  ErrorHandlingConfig?: ErrorHandlingConfig;
}
export interface UpsolverDestinationProperties {
  BucketName: UpsolverBucketName;
  BucketPrefix?: BucketPrefix;
  S3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
export interface UpsolverS3OutputFormatConfig {
  FileType?: FileType;
  PrefixConfig: PrefixConfig;
  AggregationConfig?: AggregationConfig;
}
export interface LookoutMetricsDestinationProperties {
  Object?: Object;
}
export interface ZendeskDestinationProperties {
  Object: Object;
  ErrorHandlingConfig?: ErrorHandlingConfig;
  /**
   * List of fields used as ID when performing a write operation.
   */
  IdFieldNames?: string[];
  WriteOperationType?: WriteOperationType;
}
export interface Task {
  /**
   * Source fields on which particular task will be applied
   */
  SourceFields: string[];
  /**
   * Operation to be performed on provided source fields
   */
  ConnectorOperator?: {
    Amplitude?: AmplitudeConnectorOperator;
    Datadog?: DatadogConnectorOperator;
    Dynatrace?: DynatraceConnectorOperator;
    GoogleAnalytics?: GoogleAnalyticsConnectorOperator;
    InforNexus?: InforNexusConnectorOperator;
    Marketo?: MarketoConnectorOperator;
    S3?: S3ConnectorOperator;
    SAPOData?: SAPODataConnectorOperator;
    Salesforce?: SalesforceConnectorOperator;
    ServiceNow?: ServiceNowConnectorOperator;
    Singular?: SingularConnectorOperator;
    Slack?: SlackConnectorOperator;
    Trendmicro?: TrendmicroConnectorOperator;
    Veeva?: VeevaConnectorOperator;
    Zendesk?: ZendeskConnectorOperator;
    [k: string]: unknown;
  };
  /**
   * A field value on which source field should be validated
   */
  DestinationField?: string;
  /**
   * Type of task
   */
  TaskType: "Arithmetic" | "Filter" | "Map" | "Map_all" | "Mask" | "Merge" | "Truncate" | "Validate";
  /**
   * A Map used to store task related info
   */
  TaskProperties?: TaskPropertiesObject[];
}
/**
 * An object used to store task related info
 */
export interface TaskPropertiesObject {
  Key: OperatorPropertiesKeys;
  Value: string;
}
/**
 * A label for tagging AppFlow resources
 */
export interface Tag {
  /**
   * A string used to identify this tag
   */
  Key: string;
  /**
   * A string containing the value for the tag
   */
  Value: string;
}
