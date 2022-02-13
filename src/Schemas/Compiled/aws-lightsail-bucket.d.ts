/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lightsail::Bucket
 */
export interface AwsLightsailBucket {
  /**
   * The name for the bucket.
   */
  BucketName: string;
  /**
   * The ID of the bundle to use for the bucket.
   */
  BundleId: string;
  BucketArn?: string;
  /**
   * Specifies whether to enable or disable versioning of objects in the bucket.
   */
  ObjectVersioning?: boolean;
  AccessRules?: AccessRules;
  /**
   * The names of the Lightsail resources for which to set bucket access.
   */
  ResourcesReceivingAccess?: string[];
  /**
   * An array of strings to specify the AWS account IDs that can access the bucket.
   */
  ReadOnlyAccessAccounts?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The URL of the bucket.
   */
  Url?: string;
  /**
   * Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle.
   */
  AbleToUpdateBundle?: boolean;
}
/**
 * An object that sets the public accessibility of objects in the specified bucket.
 */
export interface AccessRules {
  /**
   * Specifies the anonymous access to all objects in a bucket.
   */
  GetObject?: string;
  /**
   * A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.
   */
  AllowPublicOverrides?: boolean;
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
  Value?: string;
}
