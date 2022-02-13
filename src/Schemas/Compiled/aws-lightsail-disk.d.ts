/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::Lightsail::Disk
 */
export interface AwsLightsailDisk {
  /**
   * The names to use for your new Lightsail disk.
   */
  DiskName: string;
  DiskArn?: string;
  /**
   * Support code to help identify any issues
   */
  SupportCode?: string;
  /**
   * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   */
  AvailabilityZone?: string;
  Location?: Location;
  /**
   * Resource type of Lightsail instance.
   */
  ResourceType?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * An array of objects representing the add-ons to enable for the new instance.
   */
  AddOns?: AddOn[];
  /**
   * State of the Lightsail disk
   */
  State?: string;
  /**
   * Attachment State of the Lightsail disk
   */
  AttachmentState?: string;
  /**
   * Size of the Lightsail disk
   */
  SizeInGb: number;
  /**
   * Iops of the Lightsail disk
   */
  Iops?: number;
  /**
   * Check is Disk is attached state
   */
  IsAttached?: boolean;
  /**
   * Path of the  attached Disk
   */
  Path?: string;
  /**
   * Name of the attached Lightsail Instance
   */
  AttachedTo?: string;
}
/**
 * Location of a resource.
 */
export interface Location {
  /**
   * The Availability Zone in which to create your disk. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   */
  AvailabilityZone?: string;
  /**
   * The Region Name in which to create your disk.
   */
  RegionName?: string;
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
/**
 * A addon associate with a resource.
 */
export interface AddOn {
  /**
   * The add-on type
   */
  AddOnType: string;
  /**
   * Status of the Addon
   */
  Status?: "Enabling" | "Disabling" | "Enabled" | "Terminating" | "Terminated" | "Disabled" | "Failed";
  AutoSnapshotAddOnRequest?: AutoSnapshotAddOn;
}
/**
 * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
 */
export interface AutoSnapshotAddOn {
  /**
   * The daily time when an automatic snapshot will be created.
   */
  SnapshotTimeOfDay?: string;
}