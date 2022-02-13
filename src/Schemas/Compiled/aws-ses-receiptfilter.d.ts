/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::SES::ReceiptFilter
 */
export interface AwsSesReceiptfilter {
  Id?: string;
  Filter: Filter;
}
export interface Filter {
  IpFilter: IpFilter;
  Name?: string;
}
export interface IpFilter {
  Policy: string;
  Cidr: string;
}
