/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::ImageBuilder::ContainerRecipe
 */
export type AwsImagebuilderContainerrecipe = {
  /**
   * The Amazon Resource Name (ARN) of the container recipe.
   */
  Arn?: string;
  /**
   * The name of the container recipe.
   */
  Name?: string;
  /**
   * The description of the container recipe.
   */
  Description?: string;
  /**
   * The semantic version of the container recipe (<major>.<minor>.<patch>).
   */
  Version?: string;
  /**
   * Components for build and test that are included in the container recipe.
   */
  Components?: ComponentConfiguration[];
  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   */
  InstanceConfiguration?: {
    /**
     * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
     */
    Image?: string;
    /**
     * Defines the block devices to attach for building an instance from this Image Builder AMI.
     */
    BlockDeviceMappings?: InstanceBlockDeviceMapping[];
  };
  /**
   * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
   */
  DockerfileTemplateData?: string;
  /**
   * The S3 URI for the Dockerfile that will be used to build your container image.
   */
  DockerfileTemplateUri?: string;
  /**
   * Specifies the operating system platform when you use a custom source image.
   */
  PlatformOverride?: "Windows" | "Linux";
  /**
   * Specifies the type of container, such as Docker.
   */
  ContainerType?: "DOCKER";
  /**
   * Specifies the operating system version for the source image.
   */
  ImageOsVersionOverride?: string;
  /**
   * The destination repository for the container image.
   */
  TargetRepository?: {
    /**
     * Specifies the service in which this image was registered.
     */
    Service?: "ECR";
    /**
     * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
     */
    RepositoryName?: string;
  };
  /**
   * Identifies which KMS key is used to encrypt the container image.
   */
  KmsKeyId?: string;
  /**
   * The source image for the container recipe.
   */
  ParentImage?: string;
  /**
   * The working directory to be used during build and test workflows.
   */
  WorkingDirectory?: string;
  /**
   * Tags that are attached to the container recipe.
   */
  Tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".{1,}".
     */
    [k: string]: string;
  };
} & {
  [k: string]: unknown;
};

/**
 * Configuration details of the component.
 */
export interface ComponentConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the component.
   */
  ComponentArn?: string;
}
/**
 * Defines block device mappings for the instance used to configure your image.
 */
export interface InstanceBlockDeviceMapping {
  /**
   * The device to which these mappings apply.
   */
  DeviceName?: string;
  /**
   * Use to manage instance ephemeral devices.
   */
  VirtualName?: string;
  /**
   * Use to remove a mapping from the parent image.
   */
  NoDevice?: string;
  /**
   * Use to manage Amazon EBS-specific configuration for this mapping.
   */
  Ebs?: {
    /**
     * Use to configure device encryption.
     */
    Encrypted?: boolean;
    /**
     * Use to configure delete on termination of the associated device.
     */
    DeleteOnTermination?: boolean;
    /**
     * Use to configure device IOPS.
     */
    Iops?: number;
    /**
     * Use to configure the KMS key to use when encrypting the device.
     */
    KmsKeyId?: string;
    /**
     * The snapshot that defines the device contents.
     */
    SnapshotId?: string;
    /**
     * For GP3 volumes only – The throughput in MiB/s that the volume supports.
     */
    Throughput?: number;
    /**
     * Use to override the device's volume size.
     */
    VolumeSize?: number;
    /**
     * Use to override the device's volume type.
     */
    VolumeType?: "standard" | "io1" | "io2" | "gp2" | "gp3" | "sc1" | "st1";
  };
}
