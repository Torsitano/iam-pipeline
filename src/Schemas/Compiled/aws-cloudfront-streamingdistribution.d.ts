/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::CloudFront::StreamingDistribution
 */
export interface AwsCloudfrontStreamingdistribution {
  Id?: string;
  DomainName?: string;
  StreamingDistributionConfig: StreamingDistributionConfig;
  Tags: Tag[];
}
export interface StreamingDistributionConfig {
  Logging?: Logging;
  Comment: string;
  PriceClass?: string;
  S3Origin: S3Origin;
  Enabled: boolean;
  Aliases?: string[];
  TrustedSigners: TrustedSigners;
}
export interface Logging {
  Bucket: string;
  Enabled: boolean;
  Prefix: string;
}
export interface S3Origin {
  DomainName: string;
  OriginAccessIdentity: string;
}
export interface TrustedSigners {
  Enabled: boolean;
  AwsAccountNumbers?: string[];
}
export interface Tag {
  Key: string;
  Value: string;
}
