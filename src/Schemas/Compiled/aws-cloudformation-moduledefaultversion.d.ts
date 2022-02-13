/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A module that has been registered in the CloudFormation registry as the default version
 */
export type AwsCloudformationModuledefaultversion = {
  /**
   * The Amazon Resource Name (ARN) of the module version to set as the default version.
   */
  Arn?: string;
  /**
   * The name of a module existing in the registry.
   */
  ModuleName?: string;
  /**
   * The ID of an existing version of the named module to set as the default.
   */
  VersionId?: string;
} & {
  [k: string]: unknown;
};
