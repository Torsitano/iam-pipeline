/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The AWS::NetworkManager::GlobalNetwork type specifies a global network of the user's account
 */
export interface AwsNetworkmanagerGlobalnetwork {
  /**
   * The Amazon Resource Name (ARN) of the global network.
   */
  Arn?: string;
  /**
   * The ID of the global network.
   */
  Id?: string;
  /**
   * The description of the global network.
   */
  Description?: string;
  /**
   * The tags for the global network.
   */
  Tags?: Tag[];
}
/**
 * A key-value pair to associate with a global network resource.
 */
export interface Tag {
  Key?: string;
  Value?: string;
}