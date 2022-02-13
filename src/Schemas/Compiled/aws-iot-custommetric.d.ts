/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A custom metric published by your devices to Device Defender.
 */
export interface AwsIotCustommetric {
  /**
   * The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
   */
  MetricName?: string;
  /**
   * Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
   */
  DisplayName?: string;
  /**
   * The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
   */
  MetricType: "string-list" | "ip-address-list" | "number-list" | "number";
  /**
   * The Amazon Resource Number (ARN) of the custom metric.
   */
  MetricArn?: string;
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
