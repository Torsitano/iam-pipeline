/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::KMS::ReplicaKey resource specifies a multi-region replica customer master key (CMK) in AWS Key Management Service (AWS KMS).
 */
export interface AwsKmsReplicakey {
  /**
   * Identifies the primary CMK to create a replica of. Specify the Amazon Resource Name (ARN) of the CMK. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
   */
  PrimaryKeyArn: string;
  /**
   * A description of the CMK. Use a description that helps you to distinguish this CMK from others in the account, such as its intended use.
   */
  Description?: string;
  /**
   * Specifies whether the customer master key (CMK) is enabled. Disabled CMKs cannot be used in cryptographic operations.
   */
  Enabled?: boolean;
  /**
   * The key policy that authorizes use of the CMK. The key policy must observe the following rules.
   */
  KeyPolicy:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * Specifies the number of days in the waiting period before AWS KMS deletes a CMK that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
   */
  PendingWindowInDays?: number;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  Arn?: string;
  KeyId?: string;
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