/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::SageMaker::DeviceFleet
 */
export interface AwsSagemakerDevicefleet {
  /**
   * Description for the edge device fleet
   */
  Description?: string;
  /**
   * The name of the edge device fleet
   */
  DeviceFleetName: string;
  /**
   * S3 bucket and an ecryption key id (if available) to store outputs for the fleet
   */
  OutputConfig: {
    /**
     * The Amazon Simple Storage (S3) bucket URI
     */
    S3OutputLocation: string;
    /**
     * The KMS key id used for encryption on the S3 bucket
     */
    KmsKeyId?: string;
  };
  /**
   * Role associated with the device fleet
   */
  RoleArn: string;
  /**
   * Associate tags with the resource
   */
  Tags?: Tag[];
}
/**
 * Key-value pair to associate as a tag for the resource
 */
export interface Tag {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
}