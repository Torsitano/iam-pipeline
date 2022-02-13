/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arn = string;

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsRobomakerSimulationapplication {
  Arn?: Arn;
  /**
   * The name of the simulation application.
   */
  Name?: string;
  /**
   * The current revision id.
   */
  CurrentRevisionId?: string;
  /**
   * The rendering engine for the simulation application.
   */
  RenderingEngine?: {
    /**
     * The name of the rendering engine.
     */
    Name: "OGRE";
    /**
     * The version of the rendering engine.
     */
    Version: string;
  };
  /**
   * The robot software suite used by the simulation application.
   */
  RobotSoftwareSuite: {
    /**
     * The name of the robot software suite.
     */
    Name: "ROS" | "ROS2" | "General";
    /**
     * The version of the robot software suite.
     */
    Version?: "Kinetic" | "Melodic" | "Dashing" | "Foxy";
  };
  /**
   * The simulation software suite used by the simulation application.
   */
  SimulationSoftwareSuite: {
    /**
     * The name of the simulation software suite.
     */
    Name: "Gazebo" | "RosbagPlay" | "SimulationRuntime";
    /**
     * The version of the simulation software suite.
     */
    Version?: "7" | "9" | "11" | "Kinetic" | "Melodic" | "Dashing" | "Foxy";
  };
  /**
   * The sources of the simulation application.
   */
  Sources?: SourceConfig[];
  /**
   * The URI of the Docker image for the robot application.
   */
  Environment?: string;
  Tags?: Tags;
}
/**
 * Information about a source configuration.
 */
export interface SourceConfig {
  /**
   * The Amazon S3 bucket name.
   */
  S3Bucket: string;
  /**
   * The s3 object key.
   */
  S3Key: string;
  /**
   * The target processor architecture for the application.
   */
  Architecture: "X86_64" | "ARM64" | "ARMHF";
}
/**
 * A key-value pair to associate with a resource.
 */
export interface Tags {
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   *
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9-]{1,128}$".
   */
  [k: string]: string;
}
