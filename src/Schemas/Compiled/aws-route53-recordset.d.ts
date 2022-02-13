/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Route53::RecordSet
 */
export interface AwsRoute53Recordset {
  Id?: string;
  AliasTarget?: AliasTarget;
  Comment?: string;
  Failover?: string;
  GeoLocation?: GeoLocation;
  HealthCheckId?: string;
  HostedZoneId?: string;
  HostedZoneName?: string;
  MultiValueAnswer?: boolean;
  Name: string;
  Region?: string;
  ResourceRecords?: string[];
  SetIdentifier?: string;
  TTL?: string;
  Type: string;
  Weight?: number;
}
export interface AliasTarget {
  DNSName: string;
  EvaluateTargetHealth?: boolean;
  HostedZoneId: string;
}
export interface GeoLocation {
  ContinentCode?: string;
  CountryCode?: string;
  SubdivisionCode?: string;
}
