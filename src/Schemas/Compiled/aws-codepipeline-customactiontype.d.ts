/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::CodePipeline::CustomActionType
 */
export interface AwsCodepipelineCustomactiontype {
  Category: string;
  Id?: string;
  ConfigurationProperties?: ConfigurationProperties[];
  InputArtifactDetails: ArtifactDetails;
  OutputArtifactDetails: ArtifactDetails;
  Provider: string;
  Settings?: Settings;
  Tags?: Tag[];
  Version: string;
}
export interface ConfigurationProperties {
  Description?: string;
  Key: boolean;
  Name: string;
  Queryable?: boolean;
  Required: boolean;
  Secret: boolean;
  Type?: string;
}
export interface ArtifactDetails {
  MaximumCount: number;
  MinimumCount: number;
}
export interface Settings {
  EntityUrlTemplate?: string;
  ExecutionUrlTemplate?: string;
  RevisionUrlTemplate?: string;
  ThirdPartyConfigurationUrl?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
