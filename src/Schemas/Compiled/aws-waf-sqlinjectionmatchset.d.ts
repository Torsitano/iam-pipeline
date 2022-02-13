/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::WAF::SqlInjectionMatchSet
 */
export interface AwsWafSqlinjectionmatchset {
  Id?: string;
  Name: string;
  SqlInjectionMatchTuples?: SqlInjectionMatchTuple[];
}
export interface SqlInjectionMatchTuple {
  FieldToMatch: FieldToMatch;
  TextTransformation: string;
}
export interface FieldToMatch {
  Data?: string;
  Type: string;
}
