/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WAFRegional::GeoMatchSet
 */
export interface AwsWafregionalGeomatchset {
  Id?: string;
  GeoMatchConstraints?: GeoMatchConstraint[];
  Name: string;
}
export interface GeoMatchConstraint {
  Type: string;
  Value: string;
}
