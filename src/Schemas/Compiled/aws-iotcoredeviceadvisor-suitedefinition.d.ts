/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The device permission role arn of the test suite.
 */
export type DevicePermissionRoleArn = string;
/**
 * The devices being tested in the test suite
 */
export type Devices = [] | [DeviceUnderTest] | [DeviceUnderTest, DeviceUnderTest];
/**
 * Whether the tests are intended for qualification in a suite.
 */
export type IntendedForQualification = boolean;
/**
 * The root group of the test suite.
 */
export type RootGroup = string;
/**
 * The Name of the suite definition.
 */
export type SuiteDefinitionName = string;

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsIotcoredeviceadvisorSuitedefinition {
  SuiteDefinitionConfiguration: {
    DevicePermissionRoleArn: DevicePermissionRoleArn;
    Devices?: Devices;
    IntendedForQualification?: IntendedForQualification;
    RootGroup: RootGroup;
    SuiteDefinitionName?: SuiteDefinitionName;
  };
  /**
   * The unique identifier for the suite definition.
   */
  SuiteDefinitionId?: string;
  /**
   * The Amazon Resource name for the suite definition.
   */
  SuiteDefinitionArn?: string;
  /**
   * The suite definition version of a test suite.
   */
  SuiteDefinitionVersion?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
}
export interface DeviceUnderTest {
  CertificateArn?: string;
  ThingArn?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}
