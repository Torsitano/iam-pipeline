/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::DataSync::LocationObjectStorage.
 */
export interface AwsDatasyncLocationobjectstorage {
  /**
   * Optional. The access key is used if credentials are required to access the self-managed object storage server.
   */
  AccessKey?: string;
  /**
   * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
   */
  AgentArns: [string] | [string, string] | [string, string, string] | [string, string, string, string];
  /**
   * The name of the bucket on the self-managed object storage server.
   */
  BucketName: string;
  /**
   * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
   */
  SecretKey?: string;
  /**
   * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
   */
  ServerHostname: string;
  /**
   * The port that your self-managed server accepts inbound network traffic on.
   */
  ServerPort?: number;
  /**
   * The protocol that the object storage server uses to communicate.
   */
  ServerProtocol?: "HTTPS" | "HTTP";
  /**
   * The subdirectory in the self-managed object storage server that is used to read data from.
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?:
    | []
    | [Tag]
    | [Tag, Tag]
    | [Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ]
    | [
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag,
        Tag
      ];
  /**
   * The Amazon Resource Name (ARN) of the location that is created.
   */
  LocationArn?: string;
  /**
   * The URL of the object storage location that was described.
   */
  LocationUri?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The key for an AWS resource tag.
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   */
  Value: string;
}
