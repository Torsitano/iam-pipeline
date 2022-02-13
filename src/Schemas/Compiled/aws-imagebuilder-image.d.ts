/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource schema for AWS::ImageBuilder::Image
 */
export type AwsImagebuilderImage = {
  /**
   * The Amazon Resource Name (ARN) of the image.
   */
  Arn?: string;
  /**
   * The name of the image.
   */
  Name?: string;
  /**
   * The image tests configuration used when creating this image.
   */
  ImageTestsConfiguration?: {
    /**
     * ImageTestsEnabled
     */
    ImageTestsEnabled?: boolean;
    /**
     * TimeoutMinutes
     */
    TimeoutMinutes?: number;
    [k: string]: unknown;
  };
  /**
   * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
   */
  ImageRecipeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
   */
  ContainerRecipeArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   */
  DistributionConfigurationArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  InfrastructureConfigurationArn?: string;
  /**
   * The AMI ID of the EC2 AMI in current region.
   */
  ImageId?: string;
  /**
   * Collects additional information about the image being created, including the operating system (OS) version and package list.
   */
  EnhancedImageMetadataEnabled?: boolean;
  /**
   * The tags associated with the image.
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