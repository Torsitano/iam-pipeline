/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::ECS::CapacityProvider.
 */
export interface AwsEcsCapacityprovider {
  AutoScalingGroupProvider: AutoScalingGroupProvider;
  Name?: string;
  Tags?: Tag[];
}
export interface AutoScalingGroupProvider {
  AutoScalingGroupArn: string;
  ManagedScaling?: ManagedScaling;
  ManagedTerminationProtection?: "DISABLED" | "ENABLED";
}
/**
 * The managed scaling settings for the Auto Scaling group capacity provider.
 */
export interface ManagedScaling {
  MinimumScalingStepSize?: number;
  MaximumScalingStepSize?: number;
  Status?: "DISABLED" | "ENABLED";
  TargetCapacity?: number;
  InstanceWarmupPeriod?: number;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
