/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
 */
export type Iso8601UTC = string;
export type PricingPlan = "RequestBasedUsage";

/**
 * Definition of AWS::Location::GeofenceCollection Resource Type
 */
export interface AwsLocationGeofencecollection {
  CollectionArn?: string;
  Arn?: string;
  CollectionName: string;
  CreateTime?: Iso8601UTC;
  Description?: string;
  KmsKeyId?: string;
  PricingPlan?: PricingPlan;
  PricingPlanDataSource?: string;
  UpdateTime?: Iso8601UTC;
}
