/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SageMaker::NotebookInstance
 */
export interface AwsSagemakerNotebookinstance {
  KmsKeyId?: string;
  VolumeSizeInGB?: number;
  AdditionalCodeRepositories?: string[];
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  PlatformIdentifier?: string;
  AcceleratorTypes?: string[];
  SubnetId?: string;
  SecurityGroupIds?: string[];
  RoleArn: string;
  RootAccess?: string;
  Id?: string;
  NotebookInstanceName?: string;
  InstanceType: string;
  LifecycleConfigName?: string;
  Tags?: Tag[];
}
export interface Tag {
  Value: string;
  Key: string;
}