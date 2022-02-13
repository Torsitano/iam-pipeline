/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Definition of AWS::AmplifyUIBuilder::Theme Resource Type
 */
export interface AwsAmplifyuibuilderTheme {
  AppId?: string;
  CreatedAt?: string;
  EnvironmentName?: string;
  Id?: string;
  ModifiedAt?: string;
  Name: string;
  Overrides?: ThemeValues[];
  Tags?: Tags;
  Values: ThemeValues[];
}
export interface ThemeValues {
  Key?: string;
  Value?: ThemeValue;
}
export interface ThemeValue {
  Value?: string;
  Children?: ThemeValues[];
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^(?!aws:)[a-zA-Z+-=._:/]+$".
   */
  [k: string]: string;
}
