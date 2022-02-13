/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The resource schema for AWSLogs QueryDefinition
 */
export interface AwsLogsQuerydefinition {
  /**
   * A name for the saved query definition
   */
  Name: string;
  /**
   * The query string to use for this definition
   */
  QueryString: string;
  /**
   * Optionally define specific log groups as part of your query definition
   */
  LogGroupNames?: string[];
  /**
   * Unique identifier of a query definition
   */
  QueryDefinitionId?: string;
}