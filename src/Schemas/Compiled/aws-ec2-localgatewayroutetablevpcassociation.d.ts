/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Describes an association between a local gateway route table and a VPC.
 */
export interface AwsEc2Localgatewayroutetablevpcassociation {
  /**
   * The ID of the local gateway.
   */
  LocalGatewayId?: string;
  /**
   * The ID of the local gateway route table.
   */
  LocalGatewayRouteTableId: string;
  /**
   * The ID of the association.
   */
  LocalGatewayRouteTableVpcAssociationId?: string;
  /**
   * The state of the association.
   */
  State?: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
  /**
   * The tags for the association.
   */
  Tags?: Tag[];
}
export interface Tag {
  Key?: string;
  Value?: string;
}
