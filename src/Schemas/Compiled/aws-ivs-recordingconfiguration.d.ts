/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::IVS::RecordingConfiguration
 */
export interface AwsIvsRecordingconfiguration {
  /**
   * Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.
   */
  Arn?: string;
  /**
   * Recording Configuration Name.
   */
  Name?: string;
  /**
   * Recording Configuration State.
   */
  State?: "CREATING" | "CREATE_FAILED" | "ACTIVE";
  DestinationConfiguration: DestinationConfiguration;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
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
  ThumbnailConfiguration?: ThumbnailConfiguration;
}
/**
 * Recording Destination Configuration.
 */
export interface DestinationConfiguration {
  S3: S3DestinationConfiguration;
}
/**
 * Recording S3 Destination Configuration.
 */
export interface S3DestinationConfiguration {
  BucketName: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
/**
 * Recording Thumbnail Configuration.
 */
export interface ThumbnailConfiguration {
  /**
   * Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
   */
  RecordingMode: "INTERVAL" | "DISABLED";
  /**
   * Thumbnail recording Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.
   */
  TargetIntervalSeconds?: number;
}
