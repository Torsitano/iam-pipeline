/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export interface AwsEc2Carriergateway {
  /**
   * The ID of the carrier gateway.
   */
  CarrierGatewayId?: string;
  /**
   * The state of the carrier gateway.
   */
  State?: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
  /**
   * The ID of the owner.
   */
  OwnerId?: string;
  /**
   * The tags for the carrier gateway.
   */
  Tags?: Tag[];
}
export interface Tag {
  Key?: string;
  Value?: string;
}
