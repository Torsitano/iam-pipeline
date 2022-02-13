/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualRouter
 */
export interface AwsAppmeshVirtualrouter {
  Uid?: string;
  MeshName: string;
  VirtualRouterName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Id?: string;
  Arn?: string;
  Spec: VirtualRouterSpec;
  Tags?: Tag[];
}
export interface VirtualRouterSpec {
  Listeners: VirtualRouterListener[];
}
export interface VirtualRouterListener {
  PortMapping: PortMapping;
}
export interface PortMapping {
  Protocol: string;
  Port: number;
}
export interface Tag {
  Value: string;
  Key: string;
}