/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.
 */
export interface AwsIotDimension {
  /**
   * A unique identifier for the dimension.
   */
  Name?: string;
  /**
   * Specifies the type of the dimension.
   */
  Type: "TOPIC_FILTER";
  /**
   * Specifies the value or list of values for the dimension.
   */
  StringValues:
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * Metadata that can be used to manage the dimension.
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
   * The ARN (Amazon resource name) of the created dimension.
   */
  Arn?: string;
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tag {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
}
